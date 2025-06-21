
export const exportToExcel = (data, filename = 'operations') => {
  // Convert data to CSV format
  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    // Get headers
    const headers = Object.keys(array[0]);
    str += headers.join(',') + '\r\n';

    // Add data rows
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headers) {
        if (line !== '') line += ','
        const value = array[i][headers[index]];
        line += typeof value === 'string' ? `"${value}"` : value;
      }
      str += line + '\r\n';
    }
    return str;
  };

  // Create and download file
  const csvData = convertToCSV(data);
  const blob = new Blob(['\uFEFF' + csvData], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
