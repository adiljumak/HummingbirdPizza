import { cn } from '@/lib/utils';
import React from 'react';
import { FilterCheckbox, Title } from '.';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}


export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={10000} defaultValue={0} />
                    <Input type="number" placeholder="10000" min={100} max={10000} />
                </div>
                <RangeSlider min={0} max={10000} step={10} value={[0, 10000]} />
            </div>

            <CheckboxFiltersGroup 
                title="Ингридиенты"
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Помидоры',
                        value: '2',
                    },
                    {
                        text: 'Сырный бортик',
                        value: '3',
                    },
                    {
                        text: 'Подгорелый',
                        value: '4',
                    },
                    {
                        text: 'Без лука',
                        value: '5',
                    },
                    {
                        text: 'С луком',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Помидоры',
                        value: '2',
                    },
                    {
                        text: 'Сырный бортик',
                        value: '3',
                    },
                    {
                        text: 'Подгорелый',
                        value: '4',
                    },
                    {
                        text: 'Без лука',
                        value: '5',
                    },
                    {
                        text: 'С луком',
                        value: '6',
                    },
                    {
                        text: 'Сырный соус',
                        value: '7',
                    },
                    {
                        text: 'Помидоры',
                        value: '8',
                    },
                    {
                        text: 'Сырный бортик',
                        value: '9',
                    },
                    {
                        text: 'Подгорелый',
                        value: '10',
                    },
                    {
                        text: 'Без лука',
                        value: '11',
                    },
                    {
                        text: 'С луком',
                        value: '12',
                    },
                ]}
            />

        </div>
    )
}