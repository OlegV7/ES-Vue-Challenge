import App from '../../src/App.vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import getData from '../../src/services/DataService'
import data from '../../public/data.json'

jest.mock('../../src/services/DataService')

beforeEach(() => jest.clearAllMocks())

describe('App', () => {
    it('Renders posts if request is successfull', async () => {
        getData.mockResolvedValueOnce(data)

        const wrapper = mount(App)

        await flushPromises()
        expect(getData).toHaveBeenCalledTimes(1)

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(4)
    })

    it('When the button is clicked more posts get rendered', async () => {
        getData.mockResolvedValueOnce(data)

        const wrapper = mount(App)

        await flushPromises()
        expect(getData).toHaveBeenCalledTimes(1)

        const btn = wrapper.find('button')
        await btn.trigger('click')

        const postListItems = wrapper.findAllComponents('[data-testid="post-list-item"]')

        expect(postListItems).toHaveLength(8)
    })
})