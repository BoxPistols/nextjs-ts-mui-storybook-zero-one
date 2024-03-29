import { useState } from 'react'
import styles from '../styles/Home.module.css'

const API = `${process.env.NEXT_PUBLIC_API_KEY}`

export const Translate = () => {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const handleTranslate = async () => {
    const response = await fetch(
      `https://api-free.deepl.com/v2/translate?auth_key=${API}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `text=${encodeURIComponent(inputText)}&source=JA&target_lang=EN`,
      },
    )
    const data = await response.json()
    setTranslatedText(data.translations[0].text)
  }

  // const clear = () => {
  //   return { translatedText: null }
  // }

  let capitalize = function (str) {
    if (typeof str !== 'string' || !str) return str
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="翻訳したい日本語を入れてください"
      />
      <button
        onClick={handleTranslate}
        style={{ background: '#ccc', margin: '8px 2px', padding: '10px' }}
      >
        Translate
      </button>

      {/* <button
        onClick={clear}
        style={{ background: '#ccc', margin: '8px 2px', padding: '10px' }}
      >
        clear
      </button> */}

      <div className={styles.head4}>
        Capitalize{' '}
        <small style={{ fontSize: '12px' }}>
          先頭（最初の1文字）を大文字、以降を小文字
        </small>
      </div>
      {/* <p style={{ margin: '8px' }}> */}
      <p
        style={{
          border: '2px solid #ccc',
          padding: '8px',
          userSelect: 'all',
          marginBottom: 16,
        }}
      >
        {'"'}
        {/* {capitalize. */}
        {capitalize(translatedText.replace(/\s+/g, ' '))}
        {'"'}: {'"'}
        {inputText}
        {'"'}
        <br />
        {'"'}
        {capitalize(translatedText.replace(/\s+/g, ' '))}
        {'"'}: {'"'}
        {capitalize(translatedText.replace(/\s+/g, ' '))}
        {/* {translatedText} */}
        {'"'}
      </p>

      <div className={styles.head4}>
        All UpperCamel{' '}
        <small style={{ fontSize: '12px' }}>単語ごとの先頭大文字</small>
      </div>
      <p
        style={{
          textTransform: 'capitalize',
          border: '2px solid #ccc',
          padding: '8px',
          userSelect: 'all',
          marginBottom: 16,
        }}
      >
        {'"'}
        {/* {capitalize. */}
        {translatedText.replace(/\s+/g, ' ')}
        {'"'}: {'"'}
        {inputText}
        {'"'}
        <br />
        {'"'}
        {translatedText.replace(/\s+/g, ' ')}
        {'"'}: {'"'}
        {translatedText}
        {'"'}
      </p>

      <div className={styles.head4}>
        lower-kebabl <small style={{ fontSize: '12px' }}>小文字のケバブ</small>
      </div>
      <p
        style={{
          textTransform: 'lowercase',
          border: '2px solid #ccc',
          padding: '8px',
          userSelect: 'all',
          marginBottom: 16,
        }}
      >
        {'"'}
        {translatedText.replace(/\s+/g, '-')}
        {'"'}: {'"'}
        {inputText}
        {'"'}
        <br />
        {'"'}
        {translatedText.replace(/\s+/g, '-')}
        {'"'}: {'"'}
        {translatedText}
        {'"'}
      </p>

      <div className={styles.head4}>
        snake-case{' '}
        <small style={{ fontSize: '12px' }}>小文字のスネークケース</small>
      </div>
      <p
        style={{
          textTransform: 'lowercase',
          border: '2px solid #ccc',
          padding: '8px',
          userSelect: 'all',
          marginBottom: 16,
        }}
      >
        {'"'}
        {translatedText.replace(/\s+/g, '_')}
        {'"'}: {'"'}
        {inputText}
        {'"'}
        <br />
        {'"'}
        {translatedText.replace(/\s+/g, '_')}
        {'"'}: {'"'}
        {translatedText}
        {'"'}
      </p>
    </div>
  )
}
