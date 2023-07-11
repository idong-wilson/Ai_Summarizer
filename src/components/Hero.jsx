import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="flex w-full flex-col justify-center items-center">
      <nav className="flex w-full pt-3 mb-10 justify-between items-center">
        <img src={logo} alt="sumz_logo" className="object-contain w-28" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/talk2aidee')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Your Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading process with Summize, an open-source AI article summarizer that condenses large articles into easily readable summaries
        </h2>

    </header>
  )
}

export default Hero