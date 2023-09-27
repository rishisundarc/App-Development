import React, { useState } from 'react';
import { Card, Button } from 'antd';
import Proportion from './Proportion'; // Import the Proportion component

const { Meta } = Card;

const SelectFlavours = () => {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [showProportion, setShowProportion] = useState(false); // State to control Proportion component visibility

  // Function to handle flavor selection
  const handleFlavorClick = (flavor) => {
    // Toggle the selection state of the flavor
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((item) => item !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const flavors = [
    { id: '1', name: 'Vanilla', description: 'Sweet and creamy vanilla flavor.', price: 5.99 },
    { id: '2', name: 'Chocolate', description: 'Rich and indulgent chocolate flavor.', price: 6.99 },
    { id: '3', name: 'Strawberry', description: 'Fresh and fruity strawberry flavor.', price: 4.99 },
    { id: '4', name: 'Mint', description: 'Cool and refreshing mint flavor.', price: 5.49 },
    { id: '5', name: 'Citrus', description: 'Zesty and tangy citrus flavor.', price: 4.79 },
    { id: '6', name: 'Floral', description: 'Elegant and fragrant floral flavor.', price: 7.99 },
    { id: '7', name: 'Woody', description: 'Warm and woody flavor with earthy notes.', price: 6.29 },
    { id: '8', name: 'Oriental', description: 'Exotic and spicy oriental flavor.', price: 8.49 },
    { id: '9', name: 'Herbaceous', description: 'Herbal and aromatic herbaceous flavor.', price: 5.99 },
    { id: '10', name: 'Aquatic', description: 'Clean and fresh aquatic flavor.', price: 4.99 },
    { id: '11', name: 'Fruity', description: 'Sweet and juicy fruity flavor.', price: 4.49 },
    { id: '12', name: 'Gourmand', description: 'Delicious and dessert-like gourmand flavor.', price: 7.99 },
    { id: '13', name: 'Spicy', description: 'Spicy and aromatic flavor with a kick.', price: 6.79 },
    { id: '14', name: 'Leathery', description: 'Rich and leather-inspired flavor.', price: 8.99 },
    { id: '15', name: 'Green', description: 'Fresh and green flavor with herbal undertones.', price: 5.99 },
    { id: '16', name: 'Chypre', description: 'Sophisticated and mossy chypre flavor.', price: 7.49 },
    { id: '17', name: 'Fougère', description: 'Classic and fern-like fougère flavor.', price: 6.99 },
    { id: '18', name: 'Aldehydic', description: 'Elegant and aldehyde-infused flavor.', price: 8.29 },
    { id: '19', name: 'Caramel', description: 'Sweet and caramelized caramel flavor.', price: 5.49 },
    { id: '20', name: 'Animalic', description: 'Sensual and animalic flavor.', price: 7.99 },
    { id: '21', name: 'Aromatic', description: 'Aromatic and herbal flavor profile.', price: 6.49 },
    { id: '22', name: 'Musk', description: 'Soft and musky musk flavor.', price: 5.79 },
    { id: '23', name: 'Amber', description: 'Warm and amber-infused flavor.', price: 7.29 },
    { id: '24', name: 'Hesperidic', description: 'Bright and citrusy hesperidic flavor.', price: 4.99 },
    { id: '25', name: 'Tea', description: 'Tea-inspired flavor with aromatic notes.', price: 6.29 },
    { id: '26', name: 'Honey', description: 'Sweet and golden honey flavor.', price: 5.99 },
    { id: '27', name: 'Tobacco', description: 'Rich and tobacco-tinged flavor.', price: 7.79 },
    { id: '28', name: 'Coffee', description: 'Dark and aromatic coffee flavor.', price: 6.99 },
    { id: '29', name: 'Aoud', description: 'Exotic and aoud-infused flavor.', price: 8.49 },
    { id: '30', name: 'Saffron', description: 'Luxurious and saffron-spiced flavor.', price: 9.99 },
    { id: '31', name: 'Rum', description: 'Rum-infused and indulgent flavor.', price: 7.99 },
    { id: '32', name: 'Cherry Blossom', description: 'Delicate and cherry blossom-inspired flavor.', price: 6.49 },
    { id: '33', name: 'Suede', description: 'Soft and suede-like flavor.', price: 8.29 },
    { id: '34', name: 'Nectarine', description: 'Juicy and nectarine-infused flavor.', price: 5.99 },
    { id: '35', name: 'Galbanum', description: 'Green and galbanum-tinged flavor.', price: 6.79 },
    { id: '36', name: 'Raspberry', description: 'Sweet and raspberry-flavored fragrance.', price: 7.29 },
    { id: '37', name: 'Cypress', description: 'Fresh and cypress-inspired flavor.', price: 5.49 },
    { id: '38', name: 'Tonka Bean', description: 'Warm and tonka bean-infused flavor.', price: 6.99 },
    { id: '39', name: 'Smoke and Incense', description: 'Smoky and incense-laden flavor.', price: 8.49 },
    { id: '40', name: 'Lavender', description: 'Calming and lavender-scented flavor.', price: 5.79 },
    // Add more flavors as needed
  ];
  

  const handleNextButtonClick = () => {
    setShowProportion(true); // Show the Proportion component
  };

  return (
    <div>
      {!showProportion && ( // Conditionally render the SelectFlavours component
        <div>
          <h3>Select Flavors:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {flavors.map((flavor) => (
              <Card
                key={flavor.id}
                hoverable
                style={{
                  width: 200,
                  margin: '10px',
                  backgroundColor: selectedFlavors.includes(flavor.name)
                    ? '#1890ff' // Change the background color for selected cards
                    : 'white',
                }}
                className={selectedFlavors.includes(flavor.id) ? 'selected-card' : ''}
                onClick={() => handleFlavorClick(flavor.name)}
              >
                <Meta
                  title={flavor.name}
                  description={`Description: ${flavor.description}`}
                />
                <p>Price: {flavor.price}</p>
              </Card>
            ))}
          </div>
          {selectedFlavors.length > 0 && (
            <div>
              <p>You selected:</p>
              <ul>
                {selectedFlavors.map((flavor) => (
                  <li key={flavor}>{flavor}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <Button type="primary" onClick={handleNextButtonClick}>
              Next
            </Button>
          </div>
        </div>
      )}
      {showProportion && <Proportion selectedFlavors={selectedFlavors} />} {/* Render Proportion component */}
    </div>
  );
};

export default SelectFlavours;
