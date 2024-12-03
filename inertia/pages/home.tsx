import { Head, usePage} from '@inertiajs/react'

export default function Home() {
  const data = usePage()

  console.log(data)

  return (
    <>
      <Head title="Homepage" />
      <h1>Homepage</h1>
    </>
  )
}