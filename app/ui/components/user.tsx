import Image from "next/image";
import avatar from '../../../public/assets/image-avatar.webp';

interface userType {
  name: string,
}

export default function User(user: userType) {
  return(
    <div className="gap-3 inline-flex place-items-center">
      <Image 
        src={avatar} 
        width={32} 
        height={32} 
        alt="user-pic"
        className="rounded-full"
      />
      <h6 className="text-sm font-bold">{user.name}</h6>
    </div>
  );
}