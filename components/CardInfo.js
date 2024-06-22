import IconCategoryMovie from './icons/IconCategoryMovie'
import IconCategoryTv from './icons/IconCategoryTv'

export default function CardInfo({
  title,
}) {
  return (
    <div style={{marginTop: "14px",
      color: "#ffffffe3"}}>
      <h2>
        {title}
      </h2>
    </div>
  )
}



