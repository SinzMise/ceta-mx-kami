import { FC } from 'react'
import { observer } from 'mobx-react'
import { FooterActions as _FooterActions } from './actions'
import { useStore } from '../../store'
import configs from '../../configs'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const FooterActions = dynamic(
  () => import('components/Footer/actions').then((m) => m.FooterActions) as any,
  { ssr: false },
) as typeof _FooterActions
export const Footer: FC = observer(() => {
  const { userStore, appStore, gatewayStore } = useStore()
  const thisYear = new Date().getFullYear()
  return (
    <footer>
      <style jsx>{`
        .row {
          padding-bottom: 18px;
        }
      `}</style>
      <div className="wrap">
        <div className="row">
          <div className="col-m-6 left to-center">
            <p>
              © {thisYear !== 2020 && '2020-'}
              {thisYear}{' '}
              <a href={configs.homePage ?? '#'} target="_blank">
                {userStore.name}
              </a>
              .{' '}
              <span title={'Stay hungry. Stay foolish. -- Steve Jobs'}>
                Stay hungry. Stay foolish.
              </span>
            </p>
            <p>
              Powered by <a href="https://github.com/mx-space">mx-space</a>.{' '}
            </p>
          </div>
          <div className="col-m-6 right to-center">
            <p style={{ marginRight: appStore.viewport.mobile ? '' : '3rem' }}>
              <Link href="/[page]" as="/about">
                <a>关于</a>
              </Link>
              ·
              <Link href="/[page]" as="/message">
                <a>留言</a>
              </Link>
              ·
              <Link href="/friends">
                <a>友链</a>
              </Link>
              ·
              <a href="/feed" target="_blank">
                RSS 订阅
              </a>
              ·
              <a href="/sitemap.xml" target={'_blank'}>
                站点地图
              </a>
              ·
              <a href="https://travellings.now.sh/" target={'_blank'}>
                开往
              </a>
            </p>
            <p style={{ marginRight: appStore.viewport.mobile ? '' : '3rem' }}>
              {gatewayStore.online} 个小伙伴正在浏览
            </p>
          </div>
        </div>
      </div>
      <FooterActions />
    </footer>
  )
})
