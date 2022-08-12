// Write your code here.
import './index.css'

const EmojiCard = props => {
  console.log(props)
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
