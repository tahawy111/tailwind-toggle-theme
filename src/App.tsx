import './App.css'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { FaDesktop } from "react-icons/fa"
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState(localStorage.theme || 'system')
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme:dark)')
  const options = [
    {
      icon: <BsFillSunFill size={20} />,
      text: "light"
    },
    {
      icon: <BsFillMoonFill size={20} />,
      text: "dark"
    },
    {
      icon: <FaDesktop size={20} />,
      text: "system"
    }
  ]


  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
        element.classList.remove("dark")
        localStorage.setItem('theme', 'light')
        break;

      default:
        localStorage.removeItem('theme')
        break;

    }
  }, [theme])

  darkQuery.addEventListener('change', (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add('dark')
      } else {
        element.classList.remove('dark')
      }
    }
  })

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add('dark')
    }
    else {
      element.classList.remove('dark')
    }
  }

  onWindowMatch()

  return (
    <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded flex">
        {options.map((option) => (
          <button key={option.text} onClick={() => setTheme(option.text)} className={`w-8 h-8 leading-9 flex justify-center items-center ${theme === option.text && "text-sky-600"} m-1`}>{option.icon}</button>
        ))}
      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center my-5">
          <h2 className='text-5xl font-bold my-5'>Amer ELTahawy - Tailwindcss toggle theme</h2>
          <h5 className='text-2xl'>Follow Me on My Github Profile <a className='underline text-blue-600' href="https://github.com/tahawy111" target="_blank" rel="noopener noreferrer">Github</a></h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur ipsum eu erat malesuada sodales. Integer imperdiet leo quis pretium fringilla. Vestibulum quis iaculis velit, eget laoreet ex. Mauris iaculis libero vel tellus fermentum mattis. Vestibulum vulputate, mi eget aliquam scelerisque, mi libero viverra sem, non auctor enim leo eu dolor. Vestibulum tincidunt vulputate tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rhoncus nisl vel lectus mollis, in suscipit enim iaculis. Ut vulputate commodo convallis. Nam posuere pellentesque tellus eget viverra. Aliquam feugiat dui quis tincidunt sollicitudin. Donec cursus metus sit amet tellus tristique pulvinar.

          Mauris eget odio vulputate, pretium erat nec, suscipit ligula. Cras auctor, orci eget lacinia porta, arcu dui mollis enim, id finibus sem nunc quis libero. Maecenas vulputate massa massa, eget laoreet metus tempus gravida. Donec molestie pulvinar mi nec mollis. Nunc sagittis orci vitae venenatis pretium. Pellentesque vel vehicula nunc, non ultrices libero. Integer nec ante ac eros molestie consectetur. Phasellus nec lacinia enim. Vivamus suscipit justo lacus, nec luctus diam lacinia vitae. Praesent molestie posuere volutpat. Morbi egestas lorem nisl. Mauris ornare, neque vitae ullamcorper aliquet, eros mauris feugiat sem, non egestas orci sem eget mauris. Maecenas interdum porttitor erat, eu ultricies massa commodo nec. Vestibulum convallis suscipit enim sed egestas. Nulla egestas nulla tempus lorem faucibus, sit amet volutpat dolor fringilla.

          Duis urna odio, dapibus quis mi sed, dapibus imperdiet libero. Curabitur in venenatis ex. Curabitur ultrices, sem id ullamcorper consectetur, est magna lacinia arcu, eget mollis mi turpis at massa. Vestibulum tristique blandit tellus, at elementum velit egestas ut. Nam nunc turpis, semper a ex id, elementum ullamcorper elit. Curabitur finibus mauris quis vehicula dictum. Mauris ullamcorper lacus non condimentum mattis.
          <br />          <br />          <br />
          Phasellus condimentum dolor vel cursus malesuada. Donec dapibus nunc sit amet arcu auctor, ut ullamcorper nisi cursus. Suspendisse dignissim feugiat erat sed tempus. Nullam efficitur mi placerat enim vestibulum, sit amet malesuada libero auctor. Etiam molestie ac quam non iaculis. Donec quis dolor elit. Suspendisse potenti. In venenatis, magna et mattis rutrum, enim augue semper ipsum, in pretium mi dolor non nisi. Phasellus et lectus id sapien dapibus vulputate ut a metus. Quisque turpis sapien, tincidunt sit amet tristique non, cursus ultrices nisi. Suspendisse non tincidunt nibh, a rutrum ante. Vestibulum cursus turpis eget odio congue, quis molestie quam varius. Nulla maximus libero a arcu ornare, eget eleifend mauris sagittis. Vestibulum sollicitudin velit vitae nulla fringilla suscipit. Quisque pellentesque sed enim ullamcorper varius. Donec elementum, ex eget tempus hendrerit, mi tortor blandit felis, et ultrices velit tellus et risus.

          Duis pulvinar, magna vel tempus imperdiet, diam tellus fringilla mi, pellentesque pulvinar tellus nisl convallis lorem. Quisque sodales non elit sed feugiat. Cras sed risus ac purus luctus varius nec quis urna. Pellentesque egestas lacus nec nisi ultrices blandit. Morbi facilisis aliquam consectetur. Aliquam semper auctor imperdiet. Sed et sagittis lacus, quis malesuada velit. Morbi interdum pharetra ullamcorper. Aenean lacinia leo dui, sed imperdiet velit lobortis in. Maecenas in fringilla nisl, nec aliquet dolor.

          Etiam tincidunt turpis et urna sodales dignissim. Ut ligula velit, imperdiet lobortis nisl vitae, tempor feugiat sapien. Nunc mattis mattis enim sed laoreet. Cras aliquam rutrum sodales. Vestibulum et finibus nisl, quis malesuada lorem. Sed mattis sem quis massa pellentesque sollicitudin. In maximus ligula in faucibus rutrum. Nullam a sagittis enim. Quisque scelerisque semper neque at consectetur. Suspendisse eget tempor dui. Etiam viverra magna dui, id commodo sapien lacinia eu. Nulla sodales vitae metus in faucibus. Suspendisse justo diam, gravida ut dignissim ut, lobortis sed neque.

          Vestibulum ultricies ante nec tincidunt facilisis. Integer fermentum ultricies dapibus. Nullam venenatis neque nec elit tincidunt, pretium lobortis ex auctor. Nulla in ligula sit amet nunc vestibulum tristique sed a elit. Morbi eu nulla nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id ultrices tortor, a scelerisque odio.
          <br />
          <br />
          <br />

          Praesent lobortis dolor felis, quis bibendum diam eleifend sit amet. Morbi semper nisi ipsum, in efficitur mi luctus in. Pellentesque blandit justo rhoncus finibus volutpat. Duis tristique, magna eget varius vulputate, est ipsum vestibulum urna, id sollicitudin dui urna in turpis. Fusce nunc metus, scelerisque ut enim placerat, euismod semper dolor. Vestibulum ut odio elit. Pellentesque ante diam, fringilla eget pretium non, eleifend et augue. In non nisl auctor, euismod tellus sit amet, tristique sapien. Quisque id orci risus. In hac habitasse platea dictumst.

          Proin vel vehicula lacus, non dictum nulla. Praesent vel dapibus orci. Sed ante ante, mollis id maximus nec, vehicula at tellus. Integer nec ex in quam vulputate aliquet. Curabitur vitae eros id felis pharetra ornare. Nunc dictum molestie arcu vel tincidunt. Etiam elit libero, tristique viverra libero a, blandit porta enim. Cras iaculis tellus sed quam ullamcorper, et ornare enim imperdiet. Vivamus ut dui fermentum, consectetur ante quis, euismod sem. Proin nunc erat, mollis vitae urna non, congue fringilla lorem. Duis fringilla odio elit, nec fermentum magna gravida vel. Fusce eget porta libero, sed blandit metus. Aenean ut nibh at ligula bibendum placerat. Sed euismod lobortis nibh varius vehicula. Nulla rhoncus nulla tellus, non volutpat nulla interdum ut.

          Etiam laoreet nibh orci, quis porttitor libero tempus id. Morbi ac enim at nibh varius facilisis. Suspendisse molestie enim viverra tincidunt rutrum. Vivamus pulvinar vestibulum mi et volutpat. Nullam lacinia leo urna, ut rutrum nibh tempus ac. Phasellus vitae rhoncus quam. Nunc aliquet nulla sed sem convallis condimentum.

          Maecenas pharetra ullamcorper nibh, fringilla eleifend metus ultrices et. Nulla at risus ut orci eleifend cursus. Praesent porttitor in urna non imperdiet. Suspendisse cursus eu lacus ornare blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum iaculis lorem ut magna ornare, vel lobortis nulla tincidunt. Praesent non massa et purus faucibus dignissim quis vel mi. Nulla vehicula, velit id viverra luctus, libero eros molestie sem, a mattis ligula ligula et augue.

          Morbi vehicula scelerisque dolor, at sollicitudin massa elementum consectetur. Etiam at est semper, feugiat massa vel, egestas lacus. Etiam est risus, tincidunt vitae lacus at, molestie aliquet ligula. In sodales purus quis consequat viverra. Donec tempor nunc eget mi elementum, sodales maximus leo pretium. Ut eget convallis ante, nec porta est. Nam euismod sapien sit amet ligula pharetra, eget ultricies est placerat. Maecenas dapibus ultricies orci a ornare. Aliquam mollis enim arcu, a congue lorem ullamcorper quis. Sed scelerisque justo eget enim convallis, sed porta mi pellentesque. Cras accums
        </p>
      </div>
    </section >
  )
}

export default App
