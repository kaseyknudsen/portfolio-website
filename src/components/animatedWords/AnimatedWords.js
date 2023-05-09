import './animatedWords.scss'


const AnimatedWords = ({ wordClass, wordArray, idx }) => {
    return (
      <span>
        {wordArray.map((word, i) => (
          <span key={word + 1} className={`${wordClass}_${i + idx}`}>
            {word}
          </span>
        ))}
      </span>
    )
  }

export default AnimatedWords;