import React, { useState } from "react";

export const Columns = ({
	onEdit,
	onSave,
	onCancel,
	onDelete,
	onChangeHandler,
}) => {
	return [
		{
			name: "Code",
			selector: (row) => row.code,
			cell: (row, index) => (
				<div>
					{row.editable ? (
						<input
							value={row.code}
							onChange={(e) => onChangeHandler(e, 'code', index)}
						/>
					) : (
						row.code
					)}
				</div>
			),
		},
		{
			name: "Category",
			selector: (row) => row.category,
			cell: (row, index) => (
				<div>
					{row.editable ? (
						<input
							value={row.category}
							onChange={(e) => onChangeHandler(e, 'category', index)}
						/>
					) : (
						row.category
					)}
				</div>
			),
		},
		{
			name: "Price",
			selector: (row) => row.price,
			cell: (row, index) => (
				<div>
					{row.editable ? (
						<input
							value={row.price}
							onChange={(e) => onChangeHandler(e, 'price', index)}
						/>
					) : (
						row.price
					)}
				</div>
			),
		},
		{
			name: "BrandName",
			selector: (row) => row.brandname,
			cell: (row, index) => (
				<div>
					{row.editable ? (
						<input
							value={row.brandname}
							onChange={(e) => onChangeHandler(e, 'brandname', index)}
						/>
					) : (
						row.brandname
					)}
				</div>
			),
		},
		{
			name: "Quantity",
			selector: (row) => row.quantity,
			cell: (row, index) => (
				<div>
					{row.editable ? (
						<input
							value={row.quantity}
							onChange={(e) => onChangeHandler(e, 'quantity', index)}
						/>
					) : (
						row.quantity
					)}
				</div>
			),
		},
		{
			name: "Description",
			selector: (row) => row.description,
			cell: (row, index) => (
				<div>
					{row.editable ? (
						<input
							value={row.description}
							onChange={(e) => onChangeHandler(e, 'description', index)}
						/>
					) : (
						row.description
					)}
				</div>
			),
		},
		{
			name: "Action",
			selector: (row) => "",
			cell: (row,index) => (
				<div>
					{!row.editable ? (
						<>
							<span class="material-icons-outlined" onClick={() => onEdit(row)}>
								edit
							</span>
							<span
								class="material-icons-outlined"
								onClick={() => onDelete(row,index)}
							>
								delete
							</span>
						</>
					) : (
						<>
							<span
								class="material-icons-outlined save-btn"
								onClick={() => onSave(row)}
							>
								check
							</span>
							<span
								class="material-icons-outlined cancel-btn"
								onClick={() => onCancel(row)}
							>
								clear
							</span>
						</>
					)}
				</div>
			),
		},
	];
};
