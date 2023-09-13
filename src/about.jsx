import { SectionList, Text, ScrollView } from 'react-native';

const sections = [
    { title: 'Section 1', data: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Section 2', data: ['Item 4', 'Item 5', 'Item 6'] },
    { title: 'Section 3', data: ['Item 7', 'Item 8', 'Item 0'] },
];

const Item = ({ text }) => <Text>{text}</Text>;
const SectionHeader = ({ title }) => <Text>{title}</Text>;

const MySectionList = () => (
    <ScrollView>
        <SectionList
        sections={sections}
        renderItem={({ item }) => <Item text={item} />}
        renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
    )}
    keyExtractor={(item, index) => item + index}
    />
    </ScrollView>
);


export default MySectionList