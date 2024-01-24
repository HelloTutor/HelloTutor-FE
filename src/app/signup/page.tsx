import Link from "next/link";

export default function Signup() {
  const signupType = [
    { name: "일반회원", link: "/signup/tutee" },
    { name: "튜터", link: "/signup/tutor" },
  ];

  return (
    <div className="text-center mt-[160px] mb-[320px]">
      <p className="text-5xl mb-20">회원가입</p>
      <div className="flex gap-10 justify-center">
        {signupType.map((item) => (
          <Link
            className="w-[300px] h-[300px] bg-[#d9d9d9] flex items-center  justify-center"
            key={item.name}
            href={item.link}
          >
            <span className=" font-semibold text-5xl">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
