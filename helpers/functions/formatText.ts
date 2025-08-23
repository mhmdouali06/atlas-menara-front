export const formatText = (text: string) => {
  return (
    text
      // replace #...# with orange span
      .replace(/#(.*?)#/g, '<span class="text-orange">$1</span>')
      // replace new line with <br>
      .replace(/\n/g, "<br/>")
  );
};
