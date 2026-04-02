import { NextResponse } from "next/server";

const MONDAY_API_URL = "https://api.monday.com/v2";
const BOARD_ID = "5094074306";

interface LeadData {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  cui: string;
  companyName: string;
  caenCode: string;
  caenEligible: boolean;
  replacesEquipment: string;
  hasEnergyAudit: string;
  address: string;
  turnover: string;
  employees: number;
}

export async function POST(request: Request) {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token) {
    return NextResponse.json(
      { success: false, error: "Server configuration error" },
      { status: 500 }
    );
  }

  let data: LeadData;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Status columns use index: 1=Done(green)=Da, 2=Stuck(red)=Nu
  const columnValues = JSON.stringify({
    text_mm219a1p: data.cui,
    text_mm21580t: data.companyName,
    text_mm21mmps: data.caenCode,
    color_mm21y2na: { index: data.caenEligible ? 1 : 2 },
    email_mm21mdpr: { email: data.contactEmail, text: data.contactEmail },
    phone_mm216y3x: { phone: data.contactPhone, countryShortName: "RO" },
    color_mm21tgyp: { index: data.replacesEquipment === "da" ? 1 : 2 },
    color_mm21k4cw: { index: data.hasEnergyAudit === "da" ? 1 : 2 },
    text_mm21ntzy: data.turnover,
    numeric_mm21jt7w: data.employees,
    text_mm218bvt: data.address,
  });

  const mutation = `mutation {
    create_item(
      board_id: ${BOARD_ID},
      item_name: "${data.contactName.replace(/"/g, '\\"')} - ${data.companyName.replace(/"/g, '\\"')}",
      column_values: ${JSON.stringify(columnValues)}
    ) {
      id
    }
  }`;

  try {
    const res = await fetch(MONDAY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        "API-Version": "2024-10",
      },
      body: JSON.stringify({ query: mutation }),
    });

    const result = await res.json();

    if (result.errors) {
      console.error("Monday.com API error:", result.errors);
      return NextResponse.json(
        { success: false, error: "Eroare la salvarea datelor. Incercati din nou." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      itemId: result.data?.create_item?.id,
    });
  } catch (err) {
    console.error("Monday.com fetch error:", err);
    return NextResponse.json(
      { success: false, error: "Eroare de conexiune. Incercati din nou." },
      { status: 500 }
    );
  }
}
