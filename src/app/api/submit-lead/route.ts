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
  hasConviction: string;
  hasRecoveryDecision: string;
  address: string;
  turnover: string;
  employees: number;
  registrationNumber: string;
  registrationDate: string;
  legalForm: string;
  vatRegistered: boolean;
  inactive: boolean;
  administrators: string;
  profitLoss: string;
  equity: string;
  liabilities: string;
  authorizedCaenCodes: string;
  financialYear: string;
  debtEquityRatio: string;
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
    // Existing columns
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
    // New columns
    text_mm21x2bg: data.registrationNumber,
    date_mm21qb5: data.registrationDate ? { date: data.registrationDate } : null,
    text_mm214epx: data.legalForm,
    color_mm21bmaf: { index: data.vatRegistered ? 1 : 2 },
    color_mm21p0w: { index: data.inactive ? 2 : 1 },
    long_text_mm21cxtp: { text: data.administrators },
    color_mm21kbya: { index: data.hasConviction === "nu" ? 1 : 2 },
    color_mm2144c1: { index: data.hasRecoveryDecision === "nu" ? 1 : 2 },
    text_mm21bbv4: data.profitLoss,
    text_mm21rxge: data.equity,
    text_mm21z2ks: data.liabilities,
    long_text_mm21d73c: { text: data.authorizedCaenCodes },
    text_mm21ej5n: data.financialYear,
    text_mm214s1t: data.debtEquityRatio,
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
