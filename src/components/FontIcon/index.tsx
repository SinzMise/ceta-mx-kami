import {
  faGithub,
  faQq,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faCircle, faDotCircle } from '@fortawesome/free-regular-svg-icons'
import {
  faBookOpen,
  faCircleNotch,
  faComment,
  faComments,
  faFeatherAlt,
  faFlask,
  faGlasses,
  faHistory,
  faMusic,
  faSubway,
  faTv,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, memo, useEffect } from 'react'

export const fontawesomeIconMap = {
  faBookOpen,
  faCircleNotch,
  faComment,
  faComments,
  faFeatherAlt,
  faGlasses,
  faHistory,
  faMusic,
  faSubway,
  faUserFriends,
  faCircle,
  faDotCircle,
  faGithub,
  faQq,
  faTwitter,
  faFlask,
  faTv,
}

let hasAppended = false
export const FontIcon: FC<{ icon?: IconDefinition | string }> = memo(
  (props) => {
    useEffect(() => {
      if (typeof props.icon == 'string') {
        if (hasAppended) {
          return
        }
        const $id = 'font-awesome-link'
        const $link = document.createElement('link')
        $link.href =
          'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css'
        $link.rel = 'stylesheet'
        $link.id = $id

        document.head.appendChild($link)
        hasAppended = true
      }
    }, [props.icon])
    if (!props.icon) {
      return null
    }
    return (
      <>
        {isFontAwesomeIconDefine(props.icon) ? (
          <FontAwesomeIcon icon={props.icon!} />
        ) : fontawesomeIconMap[props.icon] ? (
          <FontAwesomeIcon icon={fontawesomeIconMap[props.icon]} />
        ) : (
          <i className={'fa ' + props.icon} />
        )}
      </>
    )
  },
)

FontIcon.displayName = 'FI'

function isFontAwesomeIconDefine(icon): icon is IconDefinition {
  return (
    typeof icon === 'object' &&
    icon &&
    icon.icon &&
    icon.prefix &&
    icon.iconName
  )
}
