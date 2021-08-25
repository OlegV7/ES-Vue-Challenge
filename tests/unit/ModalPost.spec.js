import ModalPost from '../../src/components/ModalPost'
import { mount } from '@vue/test-utils'
import data from '../../public/data.json'

describe('ModalPost', () => {
    it('Props get passed to the modal component', async () => {
        const wrapper = mount(ModalPost, {
            props: {
                post: data[2]
            }
        })

        const modal = wrapper.find('[data-modal-testid="modal"]')

        expect(modal.exists()).toBe(true)
    })
})