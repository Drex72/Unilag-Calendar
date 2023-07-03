import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';
import { Element } from 'react-scroll';

const SectionIX = () => {
    return (
        <MainLayout>
            <Element name="strategic-units">
                <TextHeading content='Strategic Units' />
                <div>
                    {/* Content */}
                </div>
            </Element>
            <br />

            <Element name="research-innovation">
                <TextHeading content='Research and Innovations' />
                <div>
                    {/* Content */}
                </div>
            </Element>
            <br />

            <Element name="international-relations">
                <TextHeading content='International Relations, Partnerships and Prospects.' />
                <div>
                    {/* Content */}
                </div>
            </Element>

        </MainLayout>
    )
}

export default SectionIX