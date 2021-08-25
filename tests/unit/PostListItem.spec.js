import PostListItem from '../../src/components/PostListItem'
import { mount } from '@vue/test-utils'
import data from '../../public/data.json'

describe('PostListItem', () => {
    it('When the post is clicked it emitts the ID to the PostList component', async () => {
        const wrapper = mount(PostListItem, {
            props: {
                post: data[3],
                id: 3
            }
        })

        const firstPost = wrapper.find('[data-post-testid="3"]')
        await firstPost.trigger('click')
        
        const firstPostClickCall = wrapper.emitted('id-to-modal')
        expect(firstPostClickCall).toHaveLength(1)

        expect(wrapper.emitted('id-to-modal')[0][0]).toEqual(3)
    })
})