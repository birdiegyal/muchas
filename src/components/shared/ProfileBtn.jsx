import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileBtn() {
  return (
    <Link
      to="/profile"
      className="absolute min-h-[40px] p-1.5 text-center min-w-[40px] bg-transparent backdrop-blur-lg z-20 bottom-5 right-4 rounded-lg border-[1px] border-[#2f3e46] "
    >
      <User color="#fff" size={30} />
    </Link>
  );
}
