import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <h1>RTCETC</h1>
      <input type="text" name="card" id="card" />
      <button onClick={() => router.push('/card/' + encodeURIComponent(document.getElementById('card').value))}>Submit</button>
    </Layout>
  )
}
