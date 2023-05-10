import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>Discover and Share</h1>
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center '>AI-Powered Prompts</span>
      <p className='desc text-center'>
        Promptopia is a community-driven platform for discovering and sharing
        AI-generated prompts.
      </p>

      <Feed />
    </section>
  )
}

export default Home
