import { subjectKoEn } from '@/constants/subject';
import Link from 'next/link';

export default function SubjectSideBar({ title }: { title: string }) {
  return (
    <section>
      <p className='ht-lg-title my-[42px]'>{title}</p>

      <ul className='flex flex-col gap-y-4 text-center'>
        {subjectKoEn.map((subject) => (
          <li key={subject.en}>
            <Link href={{ query: { subject: subject.en } }}>
              <span className='text-2xl'>{subject.ko}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
