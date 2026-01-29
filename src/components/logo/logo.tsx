import Image from "next/image"
import Link from "next/link"


export function Logo() {

  return(
    <Link href="/" title="Página Inicial">
      <Image
        src="/logo.svg"
        alt="Logo do site."
        width={0}
        height={0}
        className="w-29 h-8"
        loading="eager"
      />
    </Link>
  );
};