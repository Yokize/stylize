import deIndent from 'de-indent';

export default function loader(source) {
  return deIndent(source);
}
