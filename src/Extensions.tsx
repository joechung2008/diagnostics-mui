import { Grid, List, ListItemButton, ListItemText } from "@mui/material";
import { byKey, isExtensionInfo, toNavLink } from "./utils";

const Extensions: React.FC<ExtensionsProps> = ({ extensions, onLinkClick }) => {
  const links = Object.values(extensions)
    .filter(isExtensionInfo)
    .map(toNavLink)
    .sort(byKey);

  return (
    <Grid className="extension-root" size="auto">
      <List>
        {links.map((link) => (
          <ListItemButton
            key={link.key}
            onClick={(e) => onLinkClick?.(e, link)}
          >
            <ListItemText primary={link.name} />
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
};

export default Extensions;
