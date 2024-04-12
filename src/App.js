import './App.css';

function Header() {
  return (
    <header className="header1">
        <h1>Sindhutai Sapkal</h1>
    </header>
  );
}

function MainContent(){
  return (
  <div className='container'>
    <div className='head-cont'>
      <img src="https://sindhutaisapkal.org/images/about_2.jpg" className='image' height="350" width="350" alt='Sindhutai Sapkal' />
      <p className='cont'>Commonly called as 'Sindhutai' or 'Maai'.</p>
    </div>

    <p className='title'>Summary</p>
    <section id="summary" className='sections'>
      <p className='text1'>Sindhutai Sapkal was an Indian social worker and social activist known particularly for her work in raising orphaned children in India. She was awarded the Padma Shri in 2021 in the Social Work category. Sapkal was born on 14 November 1948, in Pimpri Meghe in Wardha district in the then Central Provinces and Berar of Dominion of India to Abhimanyu Sathe, a cowherder. Being an unwanted child, she was referred to as Chindhi (Marathi for "piece of rag"). Abject poverty, family responsibilities and childhood marriage to an older man forced her to quit formal education after she successfully passed the fourth standard. Sapkal was married off at age 12 to Shrihari Sapkal, who was 20 years older than her, and moved to Nawargaon, Seloo in Wardha. The marriage did not last long and at the age of 20, she was violently forced out of her home by her husband, leaving her on her own to care for a daughter.</p>
    </section><br></br>

    <p className='title'>Early Life</p>
    <section id="early-life" className='sections'>
      <p className='text1'>Sindhutai Sapkal later found herself in Chikhaldara, where she started begging for food. In the process, she realised that there were many children abandoned by their parents and she adopted them as her own. She had to beg even harder to feed ever the larger family. She decided to become a mother to everyone who came across to her as an orphan. She later gave away her own daughter to the Shrimant Dagdu Sheth Halwai trust of Pune, to eliminate the feeling of partiality between her own child and the adopted children</p>
      <p className='text1'>Details of Sapkal's struggle were provided in the weekly Optimist Citizen on 18 May 2016:</p>
      <p className='text1'>In this constant tussle to survive, she found herself in Chikaldara, situated in the Amravati district of Maharashtra. Here, due to a tiger preservation project, 84 tribal villages were evacuated. Amidst the confusion, a project officer impounded 132 cows of Adivasi villagers and one of the cows died. Sapkal decided to fight for proper rehabilitation of the helpless tribal villagers. Her efforts were acknowledged by the Minister of Forests and he made appropriate arrangements for alternative relocation</p>
      <p className='text1'>Sapkal fought for the rehabilitation of eighty-four villages. In the course of her agitation, she met Chhedilal Gupta, the then Minister of Forests. He agreed that the villagers should not be displaced before the government had made appropriate arrangements at alternative sites. When Prime Minister Indira Gandhi arrived to inaugurate the tiger project, Sapkal showed her photographs of an Adivasi who had lost his eyes to a wild bear. She is quoted as saying, "I told her that the forest department paid compensation if a cow or a hen was killed by a wild animal, so why not a human being? She immediately ordered compensation."</p>
      <p className='text1'>After being informed of the plight of orphaned and abandoned Adivasi children, Sapkal took care of the children in return for meager amounts of food. Shortly thereafter, it become the mission of her life.</p>
    </section>

    <p className='title'>Orphanages</p>
    <section id="orphanage" className='sections'>
      <p className='text1'>Sapkal devoted herself to orphans. As a result, she was fondly called "Mai", which means "mother". She nurtured over 1,500 orphaned children and through them had a grand family of 382 sons-in-law and 49 daughters-in-law. She has been honoured with more than 700 awards for her work. She used award money to buy land to make a home for orphaned children</p>
      <div className='orp-cont'>
        <div className='orph-div orph-div1'>
          <div className='orph-img'>
            <img src="https://sindhutaisapkal.org/images/initiative_8.jpg" className='image' alt="Maainagari" height={300} width={300} />
          </div><br/>
          <p className='text2'>Maainagari</p>
          <p className='text3'>A 250 Bed Residential Address for Orphans and Destitutes</p>
        </div>

        <div className='orph-div orph-div1'>
          <div className='orph-img'>
            <img src="https://sindhutaisapkal.org/images/initiatives/manashanti_chhatralaya/image_7.jpeg" className='image' alt='Shree Manshanti Chatralaya' height={300} width={300} />
          </div><br/>
          <p className='text2'>Shree Manshanti Chatralaya</p>
          <p className='text3'>An orphanage est. in 2019, nurturing 80 Orphans at present, with the help of 20 Caregivers.</p>
        </div>

        <div className='orph-div orph-div1'>
          <div className='orph-img'>
            <img src="https://sindhutaisapkal.org/images/initiative_2.jpg" className='image' alt='Mamata Bal Sadan' height={300} width={300} />
          </div><br/>
          <p className='text2'>Mamata Bal Sadan</p>
          <p className='text3'>An orphanage est. in 1994, nurturing 70 Orphans at present, with the help of 16 Caregivers.</p>
        </div>
      </div>

    </section>

    <p className='title'>Film</p>
    <section id="film" className='sections'>
      <p className='text1'>The 2010 Marathi film Mee Sindhutai Sapkal by Anant Mahadevan is a biopic inspired by the true story of Sindhutai Sapkal. The film was selected for world premiere at the 54th London Film Festival</p>
    </section>

    <p className='title'>Awards</p>
    <section id="awards" className='sections'>
    <div className='awards-gallery'>
        <div className='award-div'>
          <p className='text2'>Padma Shri in the Social Work category</p>
          <p className='text3'>2021</p>
        </div>
        
        <div className='award-div'>
          <p className='text2'>Nari Shakti Puraskar from the President Of India</p>
          <p className='text3'>2017</p>
        </div>

        <div className='award-div'>
          <p className='text2'>Honorary doctorate by the Dr. D. Y. Patil College of Engineering, Pune</p>
          <p className='text3'>2016</p>
        </div>

        <div className='award-div'>
          <p className='text2'>Social Worker of the Year award from Wockhardt Foundation</p>
          <p className='text3'>2016</p>
        </div>

        <div className='award-div'>
          <p className='text2'>Mother Teresa Awards for Social Justice</p>
          <p className='text3'>2013</p>
        </div>

        <div className='award-div'>
          <p className='text2'>The National Award for Iconic Mother</p>
          <p className='text3'>2013</p>
        </div>

        <div className='award-div'>
          <p className='text2'>Real Heroes Awards, given by CNN-IBN and Reliance Foundation</p>
          <p className='text3'>2012</p>
        </div>

        <div className='award-div'>
          <p className='text2'>COEP Gaurav Puraskar, given by College of Engineering, Pune</p>
          <p className='text3'>2012</p>
        </div>

        <div className='award-div'>
          <p className='text2'>Women of the Year Award, given by daily Marathi newspaper Loksatta</p>
          <p className='text3'>2008</p>
        </div>
      </div>
    </section>

    <p className='title'>Death</p>
    <section id="death" className='sections'>
      <p className='text1'>She died of a heart attack in Pune, Maharashtra, on 4 January 2022, at the age of 73.</p>
    </section>
  </div>
  );
}


function Footer(){
  return(
    <div className='footer1'>
      <p className='text3'>Created by Gayatri Rode, 2024</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
