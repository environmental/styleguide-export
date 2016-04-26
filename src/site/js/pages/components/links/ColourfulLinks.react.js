import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { colourfulLinksCode } from '~/components/CodeSnippets.js';

export default function ColourfulLinks() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Colourful links"} />

                <SectionDescription>
                    Colourful and friendly links used on the blog to
                    differenciate categories.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="inline">
                        <div className="marginRight-m">
                            <a
                                className="link link--blue fontSize-m"
                                href="#">
                                Blue
                            </a>
                        </div>

                        <div className="marginRight-m">
                            <a
                                className="link link--green fontSize-m"
                                href="#">
                                Green
                            </a>
                        </div>

                        <div className="marginRight-m">
                            <a
                                className="link link--orange fontSize-m"
                                href="#">
                                Orange
                            </a>
                        </div>

                        <div className="marginRight-m">
                            <a
                                className="link link--pink fontSize-m"
                                href="#">
                                Pink
                            </a>
                        </div>

                        <div className="marginRight-m">
                            <a
                                className="link link--purple fontSize-m"
                                href="#">
                                Purple
                            </a>
                        </div>

                        <div className="marginRight-m">
                            <a
                                className="link link--red fontSize-m"
                                href="#">
                                Red
                            </a>
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={colourfulLinksCode} />
        </section>
    );
}
