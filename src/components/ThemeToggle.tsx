import useTheme from '~/hooks/useTheme';
import IconMoon from '~icons/heroicons/moon';
import IconSun from '~icons/heroicons/sun';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme() === 'dark';

  return (
    <div class="gap-2">
      <IconSun class="text-warning" />
      <input
        type="checkbox"
        class="toggle"
        classList={{ 'toggle-info': isDarkTheme }}
        checked={isDarkTheme}
        onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')}
      />
      <IconMoon class="text-info" />
    </div>
  );
};

export default ThemeToggle;
