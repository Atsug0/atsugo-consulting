import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Le domaine technique `*.vercel.app` reste accessible et crawlable alors que
 * le site canonique est atsugo.fr : on le redirige en 308 pour éviter qu'une
 * version en double finisse indexée. Les déploiements de preview (URLs en
 * `-git-<branche>-` ou `-<hash>-`) ne sont pas touchés : ils doivent rester
 * consultables pour la relecture.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host === "atsugo-consulting.vercel.app") {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, "https://atsugo.fr");
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Tout sauf les assets internes de Next et les fichiers statiques.
  matcher: ["/((?!_next/static|_next/image).*)"],
};
