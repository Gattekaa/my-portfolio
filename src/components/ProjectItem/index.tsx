import Image, { StaticImageData } from "next/image";


interface Props {
  description?: string,
  title: string,
  photo: StaticImageData | string,
}

export default function ProjectItem({ photo, description, title }: Props) {
  return (
    <div className="w-full min-h-[350px] flex flex-col gap-4 relative">
      <Image src={photo} fill className="!static aspect-video object-cover " alt="Project image" />
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  )
}