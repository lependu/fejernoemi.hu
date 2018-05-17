import { branch, compose, pure, renderComponent } from 'recompose'
import PageIndex from 'components/page-index'
import PageWork from 'components/page-work'
import PageAdult from 'components/page-adult'
import PageOrg from 'components/page-org'
import PageChild from 'components/page-child'
import PageGallery from 'components/page-gallery'
import PageContact from 'components/page-contact'

export const contentSwitch = states =>
  compose(...states.map(state =>
    branch(
      ({ page }) => page === state.page,
      renderComponent(state.render)
    )
  ))

export const enchance = compose(
  contentSwitch([
    { page: 'index', render: PageIndex },
    { page: 'work', render: PageWork },
    { page: 'adult', render: PageAdult },
    { page: 'org', render: PageOrg },
    { page: 'magic', render: PageChild },
    { page: 'muppet', render: PageChild },
    { page: 'drama', render: PageChild },
    { page: 'gallery-work', render: PageGallery },
    { page: 'gallery-magic', render: PageGallery },
    { page: 'contact', render: PageContact }
  ])
)

export default enchance(pure)
