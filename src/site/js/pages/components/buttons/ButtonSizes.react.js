import React from 'react';

import InlineCode from '~/components/InlineCode.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { buttonSizesCode } from '~/components/CodeSnippets.js';

export default function ButtonSizes() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Button sizes"} />

                <SectionDescription>
                    Define a button size with <InlineCode>.button--xs</InlineCode>,
                    <InlineCode>.button--s</InlineCode>, <InlineCode>.button--m</InlineCode>,
                    <InlineCode>.button--l</InlineCode> or <InlineCode>.button--xl</InlineCode>.
                    The default button size is <InlineCode>.button--m</InlineCode>.
                </SectionDescription>
            </div>

            <SectionExample>
                <div
                    className="grid grid--1 breakPointM-grid--2 breakPointL-grid--4"
                    style={{ marginBottom: '-1px' }}>
                    <div className="padding-m textAlign-center borderWidth-0 borderBottomWidth-1 borderRightWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s">
                            <button
                                className="button button--xl button--flat bg-marvel"
                                type="button">
                                Button
                            </button>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Extra Large Button</p>
                    </div>

                    <div className="padding-m textAlign-center borderWidth-0 borderBottomWidth-1 breakPointL-borderRightWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s paddingTopBottom-xxs">
                            <button
                                className="button button--l button--flat bg-marvel"
                                type="button">
                                Button
                            </button>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Large Button</p>
                    </div>

                    <div className="padding-m textAlign-center borderWidth-0 borderBottomWidth-1 breakPointM-borderRightWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s paddingTopBottom-xs">
                            <button
                                className="button button--m button--flat bg-marvel"
                                type="button">
                                Button
                            </button>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Medium Button</p>
                    </div>

                    <div className="padding-m textAlign-center borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                        <div className="marginTop-xs marginBottom-s paddingTopBottom-s">
                            <button
                                className="button button--s button--flat bg-marvel"
                                type="button">
                                Button
                            </button>
                        </div>

                        <p className="lineHeight-s fontSize-s fontWeight-3 c-silver">Small Button</p>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={buttonSizesCode} />
        </section>
    );
}
