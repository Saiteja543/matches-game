import './index.css'

const ImagesList = props => {
  const {imageItemDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageItemDetails

  const onClickImageButton = () => {
    onClickImage(id)
  }

  return (
    <li className="imageItemContainer">
      <button
        type="button"
        className="image-button"
        onClick={onClickImageButton}
      >
        <img src={thumbnailUrl} alt=" thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImagesList
