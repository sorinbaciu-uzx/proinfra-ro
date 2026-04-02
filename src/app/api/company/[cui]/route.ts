import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ cui: string }> }
) {
  const { cui } = await params;
  const cuiClean = cui.replace(/\D/g, "");

  if (!cuiClean || cuiClean.length < 2 || cuiClean.length > 12) {
    return NextResponse.json(
      { success: false, error: "CUI invalid. Introduceti un CUI numeric valid." },
      { status: 400 }
    );
  }

  try {
    const [companyRes, financialsRes] = await Promise.all([
      fetch(`https://demoanaf.ro/api/company/${cuiClean}`, { next: { revalidate: 3600 } }),
      fetch(`https://demoanaf.ro/api/company/${cuiClean}/financials`, { next: { revalidate: 3600 } }),
    ]);

    if (!companyRes.ok) {
      return NextResponse.json(
        { success: false, error: "Compania nu a fost gasita. Verificati CUI-ul introdus." },
        { status: 404 }
      );
    }

    const company = await companyRes.json();
    const financials = await financialsRes.json();

    return NextResponse.json({
      success: true,
      company: company.data,
      financials: financials.data || [],
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Eroare la interogarea bazei de date. Incercati din nou." },
      { status: 500 }
    );
  }
}
