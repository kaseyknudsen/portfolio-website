import AnimatedLetters from '../../../animatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae. Malesuada pellentesque elit eget gravida
          cum sociis natoque penatibus et. Purus in massa tempor nec feugiat
          nisl pretium. 
        </p>
        <p>
          Egestas congue quisque egestas diam in arcu cursus. Egestas sed tempus
          urna et pharetra pharetra massa massa ultricies. Morbi tincidunt augue
          interdum velit euismod in pellentesque. Lobortis mattis aliquam
          faucibus purus in massa tempor nec. Facilisis volutpat est velit
          egestas dui id ornare arcu. Sagittis purus sit amet volutpat consequat
          mauris nunc congue nisi. Pharetra convallis posuere morbi leo urna
          molestie at elementum eu. Faucibus vitae aliquet nec ullamcorper sit
          amet risus. Massa vitae tortor condimentum lacinia quis vel eros donec
          ac. 
        </p>
        <p>
          Urna condimentum mattis pellentesque id nibh tortor id aliquet. Amet
          nisl suscipit adipiscing bibendum est ultricies integer quis.
          Ridiculus mus mauris vitae ultricies. Accumsan sit amet nulla facilisi
          morbi tempus iaculis urna. Donec massa sapien faucibus et molestie ac
          feugiat. 
        </p>
      </div>
    </div>
  )
}

export default About
