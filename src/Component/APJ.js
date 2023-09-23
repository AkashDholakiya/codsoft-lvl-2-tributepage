import React,{useState} from 'react'

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
      {scroll && <i onClick={handleit} className="scroller fa-solid fa-arrow-up"></i>}
      <div className="container">
        <img id='imgapj' src="https://media4support.com/wp-content/uploads/2020/07/Abdul-Kalam.jpg" alt="Not loaded" />
        <p className='letters'>
          <span>&#9758;</span> Dr. Avul Pakir Jainulabdeen Abdul Kalam, lovingly known as the "People's President," was a visionary scientist, educator, and statesman who made remarkable contributions to India's space and defense programs. Born on October 15, 1931, in Rameswaram, Tamil Nadu, he remains an inspirational figure whose life and work have left an indelible mark on the nation.
          <br />
          <span>&#9758;</span> Early Life and Formative Years,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Dr. Kalam's early life was marked by humble beginnings, yet he exhibited an unwavering determination to pursue his dreams. His education in aerospace engineering paved the way for a remarkable career in science and technology, where he would later earn the moniker "The Missile Man of India."
          <br />
          &#9758; Scientific Achievements,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Dr. Kalam's journey in the world of science and technology was exceptional. His pivotal role in the development of India's first indigenous satellite launch vehicle, SLV-III, and the successful launch of the Rohini satellite demonstrated his innovative prowess. He also played a significant role in the Pokhran-II nuclear tests.
          <br />
          &#9758; Presidency and Leadership,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Dr. Kalam served as the 11th President of India from 2002 to 2007. His presidency was marked by his deep connection with the youth of the nation. He often engaged in interactions with students and encouraged them to dream big and work hard to achieve their goals.
          <br />
          &#9758; Vision for India,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Dr. Kalam had a vision for India as a technologically advanced and prosperous nation. His speeches and writings were filled with inspirational quotes that emphasized the importance of innovation, education, and national development. His concept of "Vision 2020" aimed to transform India into a developed nation.
          <br />
          &#9758; Legacy and Impact,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Dr. APJ Abdul Kalam's legacy continues to inspire generations. His life story underscores the significance of perseverance and dedication in achieving one's dreams. He remains a role model for countless individuals, especially students, who aspire to make a difference in the fields of science, technology, and education.
          <br />
          &#9758; Dr. APJ Abdul Kalam's life and work stand as a testament to the power of science, education, and leadership. His contributions to India's scientific and technological advancements, along with his humility and connection with the people, make him a beloved figure in the hearts of millions. As we reflect on his journey, we are reminded of his call to "Dream, Dream, Dream" and work relentlessly to turn those dreams into reality.
          <p className='letters' style={{textAlign: 'center'}}>
            For More Information about Dr. A.P.J Abdul Kalam Click <a href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam" target='_blank' rel='noreferrer'>Here</a>
          </p>
        </p>
      </div>
    </div>
  )
}

export default APJ
