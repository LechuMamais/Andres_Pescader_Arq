import Image from "next/image";
import { Proyecto } from "../types";
import Link from "next/link";

interface Props {
    proyecto: Proyecto
}

export default function ProjectCard({ proyecto }: Props) {
    return (
        <Link href={`${proyecto.proy_id}`} as={`/${proyecto.proy_id}`} className='flex flex-col items-center h-[350px]'>
            <Image className="h-full object-cover" src={proyecto.imagen} alt={proyecto.titulo} width={900} height={600} />
        </Link>
    )
}