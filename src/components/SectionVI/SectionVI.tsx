import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';
import { Element } from 'react-scroll';

const SectionVI = () => {
    return (
        <MainLayout>
            <Element name="general-regulations">
                <TextHeading content='General Regulations' />
                {/* Content Here */}
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam laudantium? Ipsam nulla maxime saepe voluptatem temporibus possimus deserunt impedit beatae sequi officiis quae error est delectus provident quos recusandae, maiores neque tempora porro. Soluta possimus consectetur cupiditate cumque laudantium rem sapiente dolor perspiciatis omnis maxime nulla magni error ab, obcaecati expedita molestias ducimus quasi eaque quibusdam amet vero, eos explicabo asperiores. Illum, vitae debitis atque praesentium, numquam dolorum saepe temporibus incidunt quam ad velit provident nulla iure veritatis recusandae necessitatibus consequuntur ab minus itaque, magni quasi laudantium repudiandae. Esse eligendi suscipit tempore libero consequatur, corrupti labore dolores mollitia? Exercitationem.</p>
                </div>
            </Element>

            <Element name="admission-requirements">
                <TextHeading content='Admission Requirements' />
                {/* Content Here */}
                <div></div>
            </Element>

            <Element name="regulations-governing-first-degree">
                <TextHeading content='Regulations Governing First Degree Programmes.' />
                {/* Content Here */}
                <div></div>
            </Element>

            <Element name="regulations-governing-exam-conduct">
                <TextHeading content='Regulations Governing the Conduct of Examinations.' />
                {/* Content Here */}
                <div></div>
            </Element>

            <Element name="regulations-governing-graduate-studies">
                <TextHeading content='Regulations Governing Graduate Studies.' />
                {/* Content Here */}
                <div></div>
            </Element>

        </MainLayout>
    )
}

export default SectionVI