import { render } from '@testing-library/vue'
import PrefSelect from '../src/components/PrefSelect.vue'
import { describe, expect, it } from 'vitest'

describe('PrefSelect component', () => {
  expect(PrefSelect).toBeTruthy()

  const { getAllByTestId, findByText, html } = render(PrefSelect)

  it('正しく都道府県を取得できているか', async () => {
    await findByText('北海道')
    expect(getAllByTestId('prefecture')).toHaveLength(47)
    expect(getAllByTestId('prefecture')[0].textContent).toBe('北海道')
    expect(getAllByTestId('prefecture')[46].textContent).toBe('沖縄県')
  })

  it('Snapshot', () => {
    expect(html()).toMatchSnapshot()
  })
})
