import './index.css'

const TabsList = props => {
  const {tabDetails, onClickTabItem, isTabInActive} = props

  const {tabId, displayText} = tabDetails

  const onClickTabItemButton = () => {
    onClickTabItem(tabId)
  }

  const activeBtnClassName = isTabInActive ? 'active' : ''

  return (
    <li className="tab_item">
      <button
        className={`tab-button ${activeBtnClassName}`}
        type="button"
        onClick={onClickTabItemButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
