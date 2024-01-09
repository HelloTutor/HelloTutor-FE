import Button from '../Button';

export default function SearchForm() {
  return (
    <form className='flex items-center'>
      <input className='flex-1 border border-solid border-black mr-5' />
      <Button title='검색' type='submit' />
    </form>
  );
}
