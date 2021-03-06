import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { hideChildrenCode } from '~/components/CodeSnippets.js';

export default function HideElementsVisually() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-m breakPointM-marginBottom-l">
                <SectionTitle sectionTitle={"Hide children"} />

                <SectionDescription>
                    Hide children of an element initially and show them hover.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div
                        className="hideChildren textAlign-center borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m fontSize-m c-slate"
                        style={{ width: '140px', height: '80px', lineHeight: '80px' }}>
                        <div className="hideChildren-child">
                            Hello world
                        </div>
                    </div>
                </div>
            </SectionExample>

            <SectionCode codeType="language-html" code={hideChildrenCode} />
        </section>
    );
}
