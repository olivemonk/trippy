import {Button} from '@nextui-org/button'; 
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className='text-white bg-blue-600 rounded-full font-semibold'>Click me</Button>
      <h1 className=' text-2xl '>hello world</h1>
      <ThemeSwitcher />
    </main>
  )
}
