import React, { useState } from 'react'

const APJ = () => {
  const [scroll, setScroll] = useState(false);
  const handleit = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    })
  }
  window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })
  return (
    <div className='mcontain'>
      {scroll && <i onClick={handleit} className="scroller fade-in-scroller fa-solid fa-arrow-up" ></i>}
      <div className="container">
        <img id='imgrabindra' src="https://images.moneycontrol.com/static-mcnews/2021/05/Rabindranath-Tagore-1-770x433.jpg" alt="Not loaded" />
        <p className='letters'>
          <span>&#9758;</span> Rabindranath Tagore, often referred to as "Gurudev," was a multifaceted genius whose contributions transcended literature, art, music, and social reform. Born on May 7, 1861, in Calcutta, India, he was a polymath whose legacy continues to influence and inspire people worldwide. This comprehensive tribute explores the life, works, and impact of Rabindranath Tagore.
          <br />
          &#9758; Early Life and Formative Years,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Rabindranath Tagore was born into a prominent Bengali family renowned for their contributions to literature and culture. His early education was eclectic, blending traditional Indian learning with exposure to Western ideas. This unique upbringing profoundly influenced his worldview and creative endeavors.
          <br />
          &#9758; Literary Achievements,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Tagore's literary achievements are diverse and extensive. His poetry, short stories, novels, and plays have left an indelible mark on world literature. "Gitanjali," a collection of poems, earned him the Nobel Prize in Literature in 1913, making him the first non-European to receive this prestigious honor.
          <br />
          &#9758; Artistic Contributions,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Beyond literature, Tagore was a prolific artist and musician. He was a painter of distinction, and his songs, known as Rabindra Sangeet, continue to be an integral part of Indian classical music. His artistic creations reflected the synthesis of Indian and Western influences.
          <br />
          &#9758; Social and Educational Reforms,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Rabindranath Tagore was not merely a literary figure; he was a visionary reformer who championed education and social change. He founded Visva-Bharati University in Santiniketan, an institution that promoted a holistic education system, emphasizing the importance of creativity, nature, and internationalism.
          <br />
          &#9758; Impact and Legacy,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Rabindranath Tagore's impact extends far beyond his lifetime. His philosophy of humanism, universalism, and spiritualism continues to resonate with people worldwide. His ideas on education and cultural exchange remain relevant in today's globalized world.
          <br />
          &#9758; Rabindranath Tagore's life and work exemplify the spirit of creativity, intellectual curiosity, and social consciousness. He was not only a poet but also a philosopher, a painter, a musician, and a beacon of hope for humanity. As we delve into his rich legacy, we find ourselves inspired by his timeless words and the enduring influence of the Bard of Bengal.
          <br /><br />
          <p className='letters' style={{textAlign: 'center'}}>
            For More Information about Rabindranath Tagore Click <a href="https://en.wikipedia.org/wiki/Rabindranath_Tagore" target='_blank' rel='noreferrer'>Here</a>
          </p>
        </p>
      </div>
    </div>
  )
}

export default APJ
