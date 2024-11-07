import Image from 'next/image';

export default function ProfilePicture({ src, alt }) {
  return (
    <div className="w-32 h-32 overflow-hidden ">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={180}
        height={180}
        className="object-cover"
      />
    </div>
  );
}
