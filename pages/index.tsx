// import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// import { SampleButton } from 'components/SampleButton'
import useTranslation from 'next-translate/useTranslation'
// MUI
import { Stack, Button } from '@mui/material'
import ReactHookForm from 'components/ReactHookForm'
import TitleSet from '@/components/TitleSet.tsx'

// export const Home: React.FC = () => {
export default function Home() {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* メイン見出しスタイル設置 */}
      <TitleSet
        variant="h2"
        headingText={t('h2 Variant')}
        subtitleText={t('Title Set')}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2 className="fs-md">h2 title</h2>
        {/* <SampleButton label='xxx' size='medium' primary /> */}

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <h2>{t('lang:Japanese')}</h2>
        <h2>{t('lang:English')}</h2>
        <h2>{t('lang:Korean')}</h2>

        <ReactHookForm />
      </main>
    </div>
  )
}
