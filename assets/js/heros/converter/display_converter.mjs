import loadHeros from '../display_heros.mjs';
import getProjectColors from '../get_project_colors.mjs';

const colors = await getProjectColors("Legacy Converter");
loadHeros("converter_heros.json", "converter", colors);