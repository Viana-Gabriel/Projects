import Botao from "@/components/Botao"
import image_banner from './banner_image.svg'
import bg_image from '@/assets/bg_image.png'
import Icon from '@/assets/icon_bottom.svg'


const Banner = () => {
  return (
    <section className={'py-8 px-4 relative'} style={{ backgroundImage: `url('${bg_image}')`, backgroundSize: 'cover' }}>
      <div className={'flex flex-col-reverse justify-around items-center h-full max-w-[1400px] mx-auto lg:flex-row'}>
        <div className="lg:w-[40%] ">
          <h2 className="my-2 lg:text-xl">Alcance seus <strong className={'font-bold text-primary_color'}> objetivos financeiros</strong> com tranquilidade: simplifique, planeje e conquiste com nossa plataforma de gestão financeira pessoal.</h2>
          <Botao> Confira </Botao>
        </div>
        <img src={Icon} alt="" className={'animate-bounce absolute bottom-0 right-0 lg:right-auto'} />
        <div>
          <img className="max-h-[100%]" src={image_banner} alt="" />
        </div>
      </div>
    </section>

  )
}

export default Banner