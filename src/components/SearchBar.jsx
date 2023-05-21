import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({options, valueSearch, setValueSearch}) {
  /*const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([
    'Manzana',
    'Banana',
    'Cereza',
    'Dátil',
    'Elderberry',
    'Fresa',
    'Granada',
    'Higo',
    'Mandarina',
    'Kiwi',
  ]);*/

  const handleSearch = (event, value) => {
    setValueSearch(value);
  };

  return (
    <div>
      <Autocomplete
        
        options={options}
        value={valueSearch}
        onChange={handleSearch}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Buscar..."
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              inputMode: 'numeric',
              pattern: '[0-9]*',
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchBar;
