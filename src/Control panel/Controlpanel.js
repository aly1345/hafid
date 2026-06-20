import React, { useState, useCallback, memo, useEffect, useMemo } from 'react';
import productsdata from '../productsdata';
import './Controlpanel.css';


const ImageWithDelete = memo(({ file, index, onRemove, isEditMode = false }) => {
    const isUrl = typeof file === 'string';
    const imageUrl = isUrl ? file : URL.createObjectURL(file);

    useEffect(() => {
        return () => {
            if (!isUrl && imageUrl.startsWith('blob:')) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, [imageUrl, isUrl]);

    return (
        <div className="image-with-delete">
            <div className="image-container">
                <img
                    src={imageUrl}
                    alt={isUrl ? `صورة ${index + 1}` : file.name}
                    className="thumbnail"
                    loading="lazy"
                />
                <button
                    type="button"
                    className="delete-image-btn"
                    onClick={() => onRemove(index)}
                    title="حذف الصورة"
                    aria-label="حذف الصورة"
                >
                    ×
                </button>
            </div>
            <div className="image-info">
                <span>{isUrl ? `صورة ${index + 1}` : file.name}</span>
                {!isUrl && <span className="file-size">({Math.round(file.size / 1024)} ك.بايت)</span>}
            </div>
        </div>
    );
});

const InputField = memo(({
    label,
    value,
    onChange,
    type = 'text',
    required = false,
    placeholder = '',
    min,
    step
}) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            {type === 'textarea' ? (
                <textarea
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    rows="4"
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    min={min}
                    step={step}
                />
            )}
        </div>
    );
});

const FileDropZone = memo(({
    label,
    onFileDrop,
    onFileInput,
    onRemoveImage,
    isMultiple = false,
    dragOver,
    setDragOver,
    files = [],
    isEditMode = false
}) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <div
                className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onFileDrop}
                role="button"
                tabIndex="0"
                aria-label="منطقة سحب وإفلات الصور"
            >
                <p>اسحب {isMultiple ? 'الصور' : 'الصورة'} ثم افلتها هنا</p>
                <p>Drag and drop {isMultiple ? 'images' : 'the image'} here</p>
                <p>{isMultiple ? 'يمكنك إضافة أكثر من صورة' : 'يتم قبول صورة واحدة فقط'}</p>
                <input
                    type="file"
                    accept="image/*"
                    multiple={isMultiple}
                    onChange={onFileInput}
                    className="file-input"
                    id={`file-input-${label}`}
                />
                <label htmlFor={`file-input-${label}`} className="file-input-label">
                    أو اختر {isMultiple ? 'الصور' : 'الصورة'} من جهازك
                </label>
            </div>

            {files.length > 0 && (
                <div className="images-preview-container">
                    <h4>الصور المضافة ({files.length})</h4>
                    <div className="images-grid">
                        {files.map((file, index) => (
                            <ImageWithDelete
                                key={`${isEditMode ? 'edit' : 'add'}-image-${index}`}
                                file={file}
                                index={index}
                                onRemove={onRemoveImage}
                                isEditMode={isEditMode}
                            />
                        ))}
                    </div>
                    <p className="hint">انقر على × لحذف الصورة</p>
                </div>
            )}
        </div>
    );
});

const ColorRow = memo(({
    index,
    colorData,
    hasSizes,
    onColorChange,
    formType
}) => {
    const [localColor, setLocalColor] = useState(colorData.color || '');
    const [localPrice, setLocalPrice] = useState(colorData.price || '');
    const [localSizes, setLocalSizes] = useState(colorData.sizes || '');

    useEffect(() => {
        setLocalColor(colorData.color || '');
        setLocalPrice(colorData.price || '');
        setLocalSizes(colorData.sizes || '');
    }, [colorData]);

    const handleColorChange = useCallback((e) => {
        const value = e.target.value;
        setLocalColor(value);
        onColorChange(index, 'color', value);
    }, [index, onColorChange]);

    const handlePriceChange = useCallback((e) => {
        const value = e.target.value;
        setLocalPrice(value);
        onColorChange(index, 'price', value);
    }, [index, onColorChange]);

    const handleSizesChange = useCallback((e) => {
        const value = e.target.value;
        setLocalSizes(value);
        onColorChange(index, 'sizes', value);
    }, [index, onColorChange]);

    return (
        <tr>
            <td>
                <input
                    type="text"
                    value={localColor}
                    onChange={handleColorChange}
                    required
                    placeholder="أحمر"
                    aria-label={`لون ${index + 1}`}
                />
            </td>
            <td>
                <input
                    type="number"
                    value={localPrice}
                    onChange={handlePriceChange}
                    required
                    min="0"
                    step="0.01"
                    placeholder="100.00"
                    aria-label={`سعر اللون ${index + 1}`}
                />
            </td>
            {hasSizes === true && (
                <td>
                    <input
                        type="text"
                        value={localSizes}
                        onChange={handleSizesChange}
                        required
                        placeholder="S, M, L, XL"
                        aria-label={`مقاسات اللون ${index + 1}`}
                    />
                </td>
            )}
        </tr>
    );
});

const ColorsTable = memo(({
    colorCount,
    colors,
    hasSizes,
    onColorChange,
    formType = 'add'
}) => {
    if (!colorCount || parseInt(colorCount) <= 0) return null;

    const count = parseInt(colorCount);

    return (
        <div className="colors-table">
            <h3>تفاصيل الألوان (Color Details)</h3>
            <table>
                <thead>
                    <tr>
                        <th>اللون (Color)*</th>
                        <th>سعر اللون (Color Price)*</th>
                        {hasSizes === true && <th>المقاسات المتوفرة لهذا اللون (Available Sizes for this Color)*</th>}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: count }).map((_, index) => (
                        <ColorRow
                            key={`color-row-${formType}-${index}-${hasSizes}`}
                            index={index}
                            colorData={colors[index] || { color: '', price: '', sizes: '' }}
                            hasSizes={hasSizes}
                            onColorChange={onColorChange}
                            formType={formType}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
});

const AddProductForm = memo(({
    formData,
    onFormChange,
    onColorChange,
    onSubmit,
    departments
}) => {
    const [dragOverMain, setDragOverMain] = useState(false);
    const [dragOverMultiple, setDragOverMultiple] = useState(false);
    const [localHasSizes, setLocalHasSizes] = useState(formData.hasSizes);

    useEffect(() => {
        setLocalHasSizes(formData.hasSizes);
    }, [formData.hasSizes]);

    const handleFileDrop = useCallback((e, isMultiple) => {
        e.preventDefault();
        if (isMultiple) {
            setDragOverMultiple(false);
            const files = Array.from(e.dataTransfer.files);
            if (files.every(file => file.type.startsWith('image/'))) {
                onFormChange('productImages', [...formData.productImages, ...files]);
            }
        } else {
            setDragOverMain(false);
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                onFormChange('productImage', file);
            }
        }
    }, [formData.productImages, onFormChange]);

    const handleFileInput = useCallback((e, isMultiple) => {
        if (isMultiple) {
            const files = Array.from(e.target.files);
            onFormChange('productImages', [...formData.productImages, ...files]);
        } else {
            const file = e.target.files[0];
            onFormChange('productImage', file);
        }
    }, [formData.productImages, onFormChange]);

    const handleRemoveMainImage = useCallback(() => {
        onFormChange('productImage', null);
    }, [onFormChange]);

    const handleRemoveAdditionalImage = useCallback((index) => {
        const newImages = formData.productImages.filter((_, i) => i !== index);
        onFormChange('productImages', newImages);
    }, [formData.productImages, onFormChange]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit();
    }, [onSubmit]);

    const handleLocalFormChange = useCallback((field) => (e) => {
        onFormChange(field, e.target.value);
    }, [onFormChange]);

    const handleLocalColorChange = useCallback((index, field, value) => {
        onColorChange(index, field, value);
    }, [onColorChange]);

    const handleSizesSelection = useCallback((value) => {
        setLocalHasSizes(value);
        onFormChange('hasSizes', value);
    }, [onFormChange]);

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <FileDropZone
                label="صورة المنتج الاساسية (Main Product Image)*"
                onFileDrop={(e) => handleFileDrop(e, false)}
                onFileInput={(e) => handleFileInput(e, false)}
                onRemoveImage={handleRemoveMainImage}
                isMultiple={false}
                dragOver={dragOverMain}
                setDragOver={setDragOverMain}
                files={formData.productImage ? [formData.productImage] : []}
            />

            <FileDropZone
                label="صور المنتج (Product Images)"
                onFileDrop={(e) => handleFileDrop(e, true)}
                onFileInput={(e) => handleFileInput(e, true)}
                onRemoveImage={handleRemoveAdditionalImage}
                isMultiple={true}
                dragOver={dragOverMultiple}
                setDragOver={setDragOverMultiple}
                files={formData.productImages}
            />

            <InputField
                label="اسم المنتج (Product Name)*"
                value={formData.productName}
                onChange={handleLocalFormChange('productName')}
                required
                placeholder="أدخل اسم المنتج"
            />

            <InputField
                label="وصف المنتج (Product Description)*"
                value={formData.productDescription}
                onChange={handleLocalFormChange('productDescription')}
                type="textarea"
                required
                placeholder="أدخل وصف المنتج"
            />

            <InputField
                label="سعر المنتج العام (General Product Price)*"
                value={formData.productPrice}
                onChange={handleLocalFormChange('productPrice')}
                type="number"
                required
                min="0"
                step="0.01"
                placeholder="0.00"
            />

            <InputField
                label="الفئة (Category)"
                value={formData.category}
                onChange={handleLocalFormChange('category')}
                placeholder="أدخل الفئة"
            />

            <div className="form-group">
                <label className="form-label">القسم (Department)*</label>
                <select
                    value={formData.department}
                    onChange={handleLocalFormChange('department')}
                    required
                >
                    <option value="">اختر القسم (Select Department)</option>
                    {departments.map((dept, index) => (
                        <option key={`dept-${index}`} value={dept}>{dept}</option>
                    ))}
                </select>
            </div>

            <InputField
                label="عدد الالوان المتوفرة (Available Colors Count)*"
                value={formData.colorCount}
                onChange={handleLocalFormChange('colorCount')}
                type="number"
                required
                min="1"
                placeholder="1"
            />

            <div className="form-group">
                <label className="form-label">هل المنتج يحتوي على مقاسات مختلفة؟</label>
                <div className="size-options">
                    <button
                        type="button"
                        className={`option-btn ${localHasSizes === true ? 'selected' : ''}`}
                        onClick={() => handleSizesSelection(true)}
                        aria-pressed={localHasSizes === true}
                    >
                        منتج له مقاسات مختلفة (Product with different sizes)
                    </button>
                    <button
                        type="button"
                        className={`option-btn ${localHasSizes === false ? 'selected' : ''}`}
                        onClick={() => handleSizesSelection(false)}
                        aria-pressed={localHasSizes === false}
                    >
                        منتج لا يتوفر به مقاسات (Product without sizes)
                    </button>
                </div>
                <p className="hint">الحالة الحالية: {localHasSizes === true ? 'منتج مع مقاسات' : localHasSizes === false ? 'منتج بدون مقاسات' : 'لم يتم الاختيار'}</p>
            </div>

            <ColorsTable
                colorCount={formData.colorCount}
                colors={formData.colors}
                hasSizes={localHasSizes}
                onColorChange={handleLocalColorChange}
                formType="add"
            />

            <button type="submit" className="submit-btn">
                إضافة المنتج (Add Product)
            </button>
        </form>
    );
});

const EditProductForm = memo(({
    editProductId,
    setEditProductId,
    editingProduct,
    setEditingProduct,
    formData,
    onFormChange,
    onColorChange,
    onSubmit,
    onCancel,
    departments,
    standardcollection
}) => {
    const [dragOverMain, setDragOverMain] = useState(false);
    const [dragOverMultiple, setDragOverMultiple] = useState(false);
    const [localHasSizes, setLocalHasSizes] = useState(formData.hasSizes);

    useEffect(() => {
        setLocalHasSizes(formData.hasSizes);
    }, [formData.hasSizes]);

    const handleFetchProduct = useCallback(() => {
        if (!editProductId.trim()) {
            alert('يرجى إدخال رقم المنتج');
            return;
        }

        const productId = parseInt(editProductId);
        const product = productsdata.find(p => p.id === productId);

        if (!product) {
            alert('المنتج غير موجود!');
            return;
        }

        setEditingProduct(product);

        const colorsCount = product.colors_sizes?.length || 0;
        const hasSizes = product.colors_sizes && product.colors_sizes[0]?.sizesAtColor !== undefined;

        const colorsData = product.colors_sizes?.map(color => ({
            color: color.colorNameInArabic || color.color_ar || color.color || '',
            price: color.price || '',
            sizes: color.sizesAtColor || ''
        })) || [];

        const findDepartmentFromCollection = (collectionValue) => {
            for (const [key, value] of Object.entries(standardcollection || {})) {
                if (key === collectionValue) {
                    return value;
                }
            }
            return '';
        };

        onFormChange('productImage', product.mainimg || null);
        onFormChange('productImages', product.imgs || []);
        onFormChange('productName', product.name || '');
        onFormChange('productDescription', product.description || '');
        onFormChange('productPrice', product.global_price || '');
        onFormChange('category', product.category || '');
        onFormChange('department', findDepartmentFromCollection(product.collection) || '');
        onFormChange('colorCount', colorsCount.toString());
        onFormChange('hasSizes', hasSizes);

        colorsData.forEach((color, index) => {
            onColorChange(index, 'color', color.color);
            onColorChange(index, 'price', color.price);
            if (hasSizes) {
                onColorChange(index, 'sizes', color.sizes);
            }
        });

        alert('تم جلب المنتج بنجاح!');
    }, [editProductId, setEditingProduct, onFormChange, onColorChange, standardcollection]);

    const handleFileDrop = useCallback((e, isMultiple) => {
        e.preventDefault();
        if (isMultiple) {
            setDragOverMultiple(false);
            const files = Array.from(e.dataTransfer.files);
            if (files.every(file => file.type.startsWith('image/'))) {
                onFormChange('productImages', [...formData.productImages, ...files]);
            }
        } else {
            setDragOverMain(false);
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                onFormChange('productImage', file);
            }
        }
    }, [formData.productImages, onFormChange]);

    const handleFileInput = useCallback((e, isMultiple) => {
        if (isMultiple) {
            const files = Array.from(e.target.files);
            onFormChange('productImages', [...formData.productImages, ...files]);
        } else {
            const file = e.target.files[0];
            onFormChange('productImage', file);
        }
    }, [formData.productImages, onFormChange]);

    const handleRemoveMainImage = useCallback(() => {
        onFormChange('productImage', null);
    }, [onFormChange]);

    const handleRemoveAdditionalImage = useCallback((index) => {
        const newImages = formData.productImages.filter((_, i) => i !== index);
        onFormChange('productImages', newImages);
    }, [formData.productImages, onFormChange]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit();
    }, [onSubmit]);

    const handleLocalFormChange = useCallback((field) => (e) => {
        onFormChange(field, e.target.value);
    }, [onFormChange]);

    const handleLocalColorChange = useCallback((index, field, value) => {
        onColorChange(index, field, value);
    }, [onColorChange]);

    const handleSizesSelection = useCallback((value) => {
        setLocalHasSizes(value);
        onFormChange('hasSizes', value);
    }, [onFormChange]);

    if (!editingProduct) {
        return (
            <div className="edit-section">
                <h3>تعديل المنتج (Edit Product)</h3>
                <div className="fetch-product-form">
                    <div className="form-group">
                        <label className="form-label">أدخل رقم المنتج (Enter Product ID)*</label>
                        <input
                            type="number"
                            value={editProductId}
                            onChange={(e) => setEditProductId(e.target.value)}
                            placeholder="مثال: 1"
                            required
                            min="1"
                        />
                        <p className="hint">الأرقام المتاحة: {productsdata.map(p => p.id).join(', ')}</p>
                    </div>
                    <button
                        type="button"
                        className="fetch-btn"
                        onClick={handleFetchProduct}
                    >
                        احضار المنتج (Fetch Product)
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="edit-section">
            <h3>تعديل المنتج (Edit Product) - ID: {editingProduct.id}</h3>
            <form className="product-form" onSubmit={handleSubmit}>
                <FileDropZone
                    label="صورة المنتج الاساسية (Main Product Image)*"
                    onFileDrop={(e) => handleFileDrop(e, false)}
                    onFileInput={(e) => handleFileInput(e, false)}
                    onRemoveImage={handleRemoveMainImage}
                    isMultiple={false}
                    dragOver={dragOverMain}
                    setDragOver={setDragOverMain}
                    files={formData.productImage ? [formData.productImage] : []}
                    isEditMode={true}
                />

                <FileDropZone
                    label="صور المنتج (Product Images)"
                    onFileDrop={(e) => handleFileDrop(e, true)}
                    onFileInput={(e) => handleFileInput(e, true)}
                    onRemoveImage={handleRemoveAdditionalImage}
                    isMultiple={true}
                    dragOver={dragOverMultiple}
                    setDragOver={setDragOverMultiple}
                    files={formData.productImages}
                    isEditMode={true}
                />

                <InputField
                    label="اسم المنتج (Product Name)*"
                    value={formData.productName}
                    onChange={handleLocalFormChange('productName')}
                    required
                />

                <InputField
                    label="وصف المنتج (Product Description)*"
                    value={formData.productDescription}
                    onChange={handleLocalFormChange('productDescription')}
                    type="textarea"
                    required
                />

                <InputField
                    label="سعر المنتج العام (General Product Price)*"
                    value={formData.productPrice}
                    onChange={handleLocalFormChange('productPrice')}
                    type="number"
                    required
                    min="0"
                    step="0.01"
                />

                <InputField
                    label="الفئة (Category)"
                    value={formData.category}
                    onChange={handleLocalFormChange('category')}
                />

                <div className="form-group">
                    <label className="form-label">القسم (Department)*</label>
                    <select
                        value={formData.department}
                        onChange={handleLocalFormChange('department')}
                        required
                    >
                        <option value="">اختر القسم (Select Department)</option>
                        {departments.map((dept, index) => (
                            <option key={`dept-edit-${index}`} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>

                <InputField
                    label="عدد الالوان المتوفرة (Available Colors Count)*"
                    value={formData.colorCount}
                    onChange={handleLocalFormChange('colorCount')}
                    type="number"
                    required
                    min="1"
                />

                <div className="form-group">
                    <label className="form-label">هل المنتج يحتوي على مقاسات مختلفة؟</label>
                    <div className="size-options">
                        <button
                            type="button"
                            className={`option-btn ${localHasSizes === true ? 'selected' : ''}`}
                            onClick={() => handleSizesSelection(true)}
                            aria-pressed={localHasSizes === true}
                        >
                            منتج له مقاسات مختلفة (Product with different sizes)
                        </button>
                        <button
                            type="button"
                            className={`option-btn ${localHasSizes === false ? 'selected' : ''}`}
                            onClick={() => handleSizesSelection(false)}
                            aria-pressed={localHasSizes === false}
                        >
                            منتج لا يتوفر به مقاسات (Product without sizes)
                        </button>
                    </div>
                    <p className="hint">الحالة الحالية: {localHasSizes === true ? 'منتج مع مقاسات' : localHasSizes === false ? 'منتج بدون مقاسات' : 'لم يتم الاختيار'}</p>
                </div>

                <ColorsTable
                    colorCount={formData.colorCount}
                    colors={formData.colors}
                    hasSizes={localHasSizes}
                    onColorChange={handleLocalColorChange}
                    formType="edit"
                />

                <div className="form-actions">
                    <button type="submit" className="submit-btn update-btn">
                        تحديث المنتج (Update Product)
                    </button>
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={onCancel}
                    >
                        إلغاء (Cancel)
                    </button>
                </div>
            </form>
        </div>
    );
});

const ProductPreviewCard = memo(({ product, standardcollection }) => {
    if (!product) return null;

    const getDepartmentName = (collectionCode) => {
        return standardcollection[collectionCode] || collectionCode || 'غير محدد';
    };

    return (
        <div className="product-preview-card">
            <div className="preview-header">
                <h4>معاينة المنتج قبل الحذف</h4>
                <span className="product-id">🆔 ID: {product.id}</span>
            </div>

            <div className="preview-body">
                <div className="preview-row">
                    <span className="preview-label">اسم المنتج:</span>
                    <span className="preview-value">{product.name || 'غير محدد'}</span>
                </div>

                <div className="preview-row">
                    <span className="preview-label">السعر العام:</span>
                    <span className="preview-value">{product.global_price || 'غير محدد'}</span>
                </div>

                <div className="preview-row">
                    <span className="preview-label">القسم:</span>
                    <span className="preview-value">{getDepartmentName(product.collection)}</span>
                </div>

                <div className="preview-row">
                    <span className="preview-label">الفئة:</span>
                    <span className="preview-value">{product.category || 'غير محدد'}</span>
                </div>

                <div className="preview-row">
                    <span className="preview-label">عدد الألوان:</span>
                    <span className="preview-value">{product.colors_sizes?.length || 0}</span>
                </div>

                <div className="preview-images">
                    <span className="preview-label">الصور:</span>
                    <div className="mini-images">
                        {product.mainimg && (
                            <div className="mini-image">
                                <img src={product.mainimg} alt="الصورة الرئيسية" />
                                <span>رئيسية</span>
                            </div>
                        )}
                        {product.imgs && product.imgs.slice(0, 2).map((img, index) => (
                            <div className="mini-image" key={`mini-${index}`}>
                                <img src={img} alt={`صورة ${index + 1}`} />
                                <span>ص {index + 1}</span>
                            </div>
                        ))}
                        {product.imgs && product.imgs.length > 2 && (
                            <div className="mini-image more">
                                <span>+{product.imgs.length - 2}</span>
                                <span>المزيد</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="preview-footer">
                <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span>منتج قابل للحذف</span>
                </div>
            </div>
        </div>
    );
});

const CommentPreviewCard = memo(({ comment, product, standardcollection }) => {
    if (!comment || !product) return null;

    const getDepartmentName = (collectionCode) => {
        return standardcollection[collectionCode] || collectionCode || 'غير محدد';
    };

    return (
        <div className="comment-preview-card">
            <div className="preview-header">
                <h4>معاينة التعليق قبل الحذف</h4>
                <div className="ids-container">
                    <span className="comment-id">🗨️ Comment ID: {comment.commentId || comment.id}</span>
                    <span className="product-id">📦 Product ID: {product.id}</span>
                </div>
            </div>

            <div className="preview-body">
                <div className="preview-row">
                    <span className="preview-label">نص التعليق:</span>
                    <span className="preview-value comment-text">{comment.text || 'غير محدد'}</span>
                </div>


                <div className="divider"></div>

                <div className="product-preview-mini">
                    <h5>📦 معلومات المنتج:</h5>
                    <div className="preview-row">
                        <span className="preview-label">اسم المنتج:</span>
                        <span className="preview-value">{product.name || 'غير محدد'}</span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-label">السعر:</span>
                        <span className="preview-value">{product.global_price || 'غير محدد'}</span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-label">القسم:</span>
                        <span className="preview-value">{getDepartmentName(product.collection)}</span>
                    </div>
                </div>
            </div>

            <div className="preview-footer">
                <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span>تعليق قابل للحذف</span>
                </div>
            </div>
        </div>
    );
});

const DeleteCommentSection = memo(({
    deleteCommentId,
    setDeleteCommentId,
    handleDeleteCommentSubmit,
    previewComment,
    previewProduct,
    totalCommentsCount,
    onFetchComment,
    standardcollection
}) => {
    const handleIdChange = useCallback((e) => {
        setDeleteCommentId(e.target.value);
    }, [setDeleteCommentId]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        handleDeleteCommentSubmit();
    }, [handleDeleteCommentSubmit]);

    const handleFetchComment = useCallback(() => {
        if (!deleteCommentId.trim()) {
            alert('يرجى إدخال رقم التعليق أولاً');
            return;
        }

        const commentId = parseInt(deleteCommentId);
        if (isNaN(commentId)) {
            alert('رقم التعليق غير صحيح');
            return;
        }

        if (onFetchComment) {
            onFetchComment(commentId);
        }
    }, [deleteCommentId, onFetchComment]);

    return (
        <div className="delete-comment-section">
            <h3>🗑️ حذف تعليق (Delete Comment)</h3>
            <form className="delete-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">رقم التعليق المراد حذفه (Comment ID to Delete)*</label>
                    <input
                        type="number"
                        value={deleteCommentId}
                        onChange={handleIdChange}
                        placeholder="أدخل رقم التعليق"
                        required
                        min="1"
                    />
                    <p className="hint">
                        إجمالي التعليقات في النظام: <strong>{totalCommentsCount}</strong> تعليق
                        {totalCommentsCount > 0 && (
                            <span className="comments-hint">
                                (موزعة على {productsdata.filter(p => p.comments?.length > 0).length} منتج)
                            </span>
                        )}
                    </p>
                </div>

                <button
                    type="button"
                    className="fetch-btn"
                    onClick={handleFetchComment}
                    disabled={!deleteCommentId.trim()}
                >
                    🔍 جلب بيانات التعليق (Fetch Comment Data)
                </button>

                {previewComment && previewProduct ? (
                    <div className="comment-preview-section">
                        <h4>🔍 معاينة بيانات التعليق:</h4>
                        <CommentPreviewCard
                            comment={previewComment}
                            product={previewProduct}
                            standardcollection={standardcollection}
                        />
                    </div>
                ) : deleteCommentId.trim() && !previewComment ? (
                    <div className="no-comment-message">
                        <h4>⚠️ التعليق غير موجود!</h4>
                        <p>الرجاء التأكد من رقم التعليق المدخل</p>
                    </div>
                ) : null}

                <div className="delete-info">
                    <div className="warning-box">
                        <h4>⚠️ تحذير هام:</h4>
                        <ul>
                            <li>لا يمكن التراجع عن عملية حذف التعليق</li>
                            <li>سيتم حذف التعليق نهائياً من قاعدة البيانات</li>
                            <li>التعليقات المحذوفة لا يمكن استعادتها</li>
                            <li>تأكد من صحة بيانات التعليق المعروضة أعلاه</li>
                        </ul>
                    </div>
                </div>

                <button
                    type="submit"
                    className="delete-btn"
                    disabled={!deleteCommentId.trim() || !previewComment}
                >
                    {previewComment ? '🗑️ تأكيد حذف التعليق' : 'أدخل رقم التعليق أولاً'}
                </button>
            </form>
        </div>
    );
});

const DeleteProductSection = memo(({
    deleteProductId,
    setDeleteProductId,
    handleDeleteSubmit,
    previewProduct,
    standardcollection
}) => {
    const handleIdChange = useCallback((e) => {
        setDeleteProductId(e.target.value);
    }, [setDeleteProductId]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        handleDeleteSubmit();
    }, [handleDeleteSubmit]);

    return (
        <div className="delete-section">
            <h3>حذف منتج (Delete Product)</h3>
            <form className="delete-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">رقم المنتج المراد حذفه (Product ID to Delete)*</label>
                    <input
                        type="number"
                        value={deleteProductId}
                        onChange={handleIdChange}
                        placeholder="أدخل رقم المنتج"
                        required
                        min="1"
                    />
                    <p className="hint">الأرقام المتاحة: {productsdata.map(p => p.id).join(', ')}</p>
                </div>

                {previewProduct ? (
                    <div className="product-preview-section">
                        <h4>🔍 معاينة بيانات المنتج:</h4>
                        <ProductPreviewCard
                            product={previewProduct}
                            standardcollection={standardcollection}
                        />
                    </div>
                ) : deleteProductId.trim() ? (
                    <div className="no-product-message">
                        <h4>⚠️ المنتج غير موجود!</h4>
                        <p>الرجاء التأكد من رقم المنتج المدخل</p>
                    </div>
                ) : null}

                <div className="delete-info">
                    <div className="warning-box">
                        <h4>⚠️ تحذير هام:</h4>
                        <ul>
                            <li>لا يمكن التراجع عن عملية الحذف</li>
                            <li>سيتم حذف المنتج نهائياً من قاعدة البيانات</li>
                            <li>سيتم حذف جميع الصور والبيانات المرتبطة</li>
                            <li>تأكد من صحة بيانات المنتج المعروضة أعلاه</li>
                        </ul>
                    </div>
                </div>

                <button
                    type="submit"
                    className="delete-btn"
                    disabled={!deleteProductId.trim() || !previewProduct}
                >
                    {previewProduct ? 'تأكيد الحذف' : 'أدخل رقم المنتج أولاً'}
                </button>
            </form>
        </div>
    );
});

function Controlpanel() {
    const [productAction, setProductAction] = useState(null);
    const [editProductId, setEditProductId] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);
    const [deleteProductId, setDeleteProductId] = useState('');
    const [deleteCommentId, setDeleteCommentId] = useState('');
    const [previewProduct, setPreviewProduct] = useState(null);
    const [previewComment, setPreviewComment] = useState(null);
    const [commentProduct, setCommentProduct] = useState(null);
    const currentYear = new Date().getFullYear();

    const departments = [
        'كوتشي رجالي',
        'كوتشي شبابي وبناتي',
        'كوتشي اطفالي',
        'حذاء رجالي',
        'حذاء نسائي',
        'الاكسسوارات (شنطة ظهر)',
        'الاكسسوارات (شنطة كروس)',
        'الاكسسوارات (محفظة)',
        'الاكسسوارات (اسوار يد)',
        'الاكسسوارات (ساعات)',
        'الاكسسوارات (منظف احذية)',
        'الاكسسوارات (شراب)',
        'الاكسسوارات (حزام)',
        'الاكسسوارات (خاتم)',
        'الاكسسوارات (سلسلة)'
    ];

    const standardcollection = {
        "btn-2": 'كوتشي رجالي',
        "btn-3": 'كوتشي شبابي وبناتي',
        "btn-6": 'كوتشي اطفالي',
        "btn-4": 'حذاء رجالي',
        "btn-5": 'حذاء نسائي',
        "btn-7-0": 'الاكسسوارات (جميع الاكسسوارات)',
        "btn-7-1": 'الاكسسوارات (شنطة ظهر)',
        "btn-7-2": 'الاكسسوارات (شنطة كروس)',
        "btn-7-3": 'الاكسسوارات (محفظة)',
        "btn-7-4": 'الاكسسوارات (اسوار يد)',
        "btn-7-5": 'الاكسسوارات (ساعات)',
        "btn-7-6": 'الاكسسوارات (منظف احذية)',
        "btn-7-7": 'الاكسسوارات (شراب)',
        "btn-7-8": 'الاكسسوارات (حزام)',
        "btn-7-9": 'الاكسسوارات (خاتم)',
        "btn-7-10": 'الاكسسوارات (سلسلة)'
    };

    const [addFormData, setAddFormData] = useState({
        productImage: null,
        productImages: [],
        productName: '',
        productDescription: '',
        productPrice: '',
        category: '',
        department: '',
        colorCount: '',
        hasSizes: null,
        colors: [],
        sizes: []
    });

    const [editFormData, setEditFormData] = useState({
        productImage: null,
        productImages: [],
        productName: '',
        productDescription: '',
        productPrice: '',
        category: '',
        department: '',
        colorCount: '',
        hasSizes: null,
        colors: [],
        sizes: []
    });

    const totalCommentsCount = useMemo(() => {
        return productsdata.reduce((total, product) => {
            return total + (product.comments?.length || 0);
        }, 0);
    }, []);

    const handleAddFormChange = useCallback((field, value) => {
        setAddFormData(prev => {
            if (field === 'colorCount') {
                const count = parseInt(value) || 0;
                const newColors = [];
                for (let i = 0; i < count; i++) {
                    newColors.push(prev.colors[i] || { color: '', price: '', sizes: '' });
                }
                return { ...prev, [field]: value, colors: newColors };
            }

            return { ...prev, [field]: value };
        });
    }, []);

    const handleAddColorChange = useCallback((index, field, value) => {
        setAddFormData(prev => {
            const newColors = [...prev.colors];
            if (!newColors[index]) {
                newColors[index] = { color: '', price: '', sizes: '' };
            }
            newColors[index][field] = value;
            return { ...prev, colors: newColors };
        });
    }, []);

    const handleAddSubmit = useCallback(() => {
        const requiredFields = [
            addFormData.productName,
            addFormData.productDescription,
            addFormData.productPrice,
            addFormData.department,
            addFormData.colorCount
        ];

        if (requiredFields.some(field => !field)) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        const colorsCount = parseInt(addFormData.colorCount);
        if (addFormData.colors.length < colorsCount) {
            alert('يرجى ملء بيانات جميع الألوان');
            return;
        }

        alert('تم إضافة المنتج بنجاح!');

        setAddFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, [addFormData]);

    const handleEditFormChange = useCallback((field, value) => {
        setEditFormData(prev => {
            if (field === 'colorCount') {
                const count = parseInt(value) || 0;
                const newColors = [];
                for (let i = 0; i < count; i++) {
                    newColors.push(prev.colors[i] || { color: '', price: '', sizes: '' });
                }
                return { ...prev, [field]: value, colors: newColors };
            }

            return { ...prev, [field]: value };
        });
    }, []);

    const handleEditColorChange = useCallback((index, field, value) => {
        setEditFormData(prev => {
            const newColors = [...prev.colors];
            if (!newColors[index]) {
                newColors[index] = { color: '', price: '', sizes: '' };
            }
            newColors[index][field] = value;
            return { ...prev, colors: newColors };
        });
    }, []);

    const handleEditSubmit = useCallback(() => {
        if (!editingProduct) {
            alert('لم يتم تحديد منتج للتعديل');
            return;
        }

        alert(`تم تحديث المنتج رقم ${editingProduct.id} بنجاح!`);

        setEditProductId('');
        setEditingProduct(null);
        setEditFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, [editingProduct]);

    const handleEditCancel = useCallback(() => {
        setEditProductId('');
        setEditingProduct(null);
        setEditFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, []);

    useEffect(() => {
        if (productAction === 'delete' && deleteProductId.trim()) {
            const productId = parseInt(deleteProductId);
            if (!isNaN(productId)) {
                const product = productsdata.find(p => p.id === productId);
                setPreviewProduct(product || null);
            } else {
                setPreviewProduct(null);
            }
        } else {
            setPreviewProduct(null);
        }
    }, [deleteProductId, productAction]);

    const handleDeleteSubmit = useCallback(() => {
        if (!deleteProductId.trim()) {
            alert('يرجى إدخال رقم المنتج');
            return;
        }

        const productId = parseInt(deleteProductId);

        if (isNaN(productId)) {
            alert('رقم المنتج غير صحيح');
            return;
        }

        if (!previewProduct) {
            alert('المنتج غير موجود!');
            return;
        }

        const confirmDelete = window.confirm(
            `هل أنت متأكد من حذف المنتج التالي؟\n\n` +
            `📦 اسم المنتج: ${previewProduct.name}\n` +
            `🆔 رقم المنتج: ${previewProduct.id}\n` +
            `💰 السعر: ${previewProduct.global_price}\n` +
            `📂 القسم: ${standardcollection[previewProduct.collection] || previewProduct.collection}\n\n` +
            `⚠️ تحذير: لا يمكن التراجع عن هذه العملية!`
        );

        if (confirmDelete) {
            console.log('حذف المنتج:', {
                id: productId,
                name: previewProduct.name,
                time: new Date().toLocaleString()
            });

            alert(`✅ تم حذف المنتج "${previewProduct.name}" بنجاح!`);

            setDeleteProductId('');
            setPreviewProduct(null);
        }
    }, [deleteProductId, previewProduct, standardcollection]);

    const handleFetchComment = useCallback((commentId) => {
        if (!commentId) {
            alert('يرجى إدخال رقم التعليق أولاً');
            return;
        }

        let foundComment = null;
        let foundProduct = null;

        for (const product of productsdata) {
            if (product.comments) {
                const comment = product.comments.find(c => c.id === commentId);
                if (comment) {
                    foundComment = comment;
                    foundProduct = product;
                    break;
                }
            }
        }

        if (foundComment && foundProduct) {
            setPreviewComment(foundComment);
            setCommentProduct(foundProduct);
            alert(`✅ تم العثور على التعليق!`);
        } else {
            setPreviewComment(null);
            setCommentProduct(null);
            alert('❌ التعليق غير موجود!');
        }
    }, []);

    const handleDeleteCommentSubmit = useCallback(() => {
        if (!deleteCommentId.trim()) {
            alert('يرجى إدخال رقم التعليق');
            return;
        }

        const commentId = parseInt(deleteCommentId);

        if (isNaN(commentId)) {
            alert('رقم التعليق غير صحيح');
            return;
        }

        if (!previewComment || !commentProduct) {
            alert('❌ لم يتم جلب بيانات التعليق! يرجى الضغط على زر "جلب بيانات التعليق" أولاً');
            return;
        }

        const confirmDelete = window.confirm(
            `هل أنت متأكد من حذف التعليق التالي؟\n\n` +
            `🗨️ نص التعليق: ${previewComment.text?.substring(0, 100)}${previewComment.text?.length > 100 ? '...' : ''}\n` +
            `📦 المنتج: ${commentProduct.name}\n` +
            `🆔 رقم التعليق: ${previewComment.commentId || previewComment.id}\n\n` +
            `⚠️ تحذير: لا يمكن التراجع عن هذه العملية!`
        );

        if (confirmDelete) {
            console.log('حذف التعليق:', {
                commentId: commentId,
                productId: commentProduct.id,
                productName: commentProduct.name,
                commentText: previewComment.text,
                time: new Date().toLocaleString()
            });

            alert(`✅ تم حذف التعليق بنجاح!`);

            setDeleteCommentId('');
            setPreviewComment(null);
            setCommentProduct(null);
        }
    }, [deleteCommentId, previewComment, commentProduct]);

    const handleAddProductClick = useCallback(() => {
        setProductAction('add');
        setEditProductId('');
        setEditingProduct(null);
        setDeleteProductId('');
        setDeleteCommentId('');
        setPreviewProduct(null);
        setPreviewComment(null);
        setCommentProduct(null);
        setEditFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, []);

    const handleEditProductClick = useCallback(() => {
        setProductAction('edit');
        setDeleteProductId('');
        setDeleteCommentId('');
        setPreviewProduct(null);
        setPreviewComment(null);
        setCommentProduct(null);
        setAddFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, []);

    const handleDeleteProductClick = useCallback(() => {
        setProductAction('delete');
        setEditProductId('');
        setEditingProduct(null);
        setDeleteCommentId('');
        setPreviewComment(null);
        setCommentProduct(null);
        setAddFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, []);

    const handleDeleteCommentClick = useCallback(() => {
        setProductAction('delete-comment');
        setEditProductId('');
        setEditingProduct(null);
        setDeleteProductId('');
        setPreviewProduct(null);
        setAddFormData({
            productImage: null,
            productImages: [],
            productName: '',
            productDescription: '',
            productPrice: '',
            category: '',
            department: '',
            colorCount: '',
            hasSizes: null,
            colors: [],
            sizes: []
        });
    }, []);

    const handleBackToDashboard = useCallback(() => {
        setProductAction(null);
        setEditProductId('');
        setEditingProduct(null);
        setDeleteProductId('');
        setDeleteCommentId('');
        setPreviewProduct(null);
        setPreviewComment(null);
        setCommentProduct(null);
    }, []);

    return (
        <div className="control-panel">
            <header className="control-panel-header">
                <h1>لوحة التحكم (Control Panel)</h1>
                <p>إدارة المنتجات والتعليقات - إضافة، تعديل، وحذف</p>
            </header>

            <div className="dashboard-container">
                {productAction === null ? (
                    <div className="dashboard">
                        <h2>الرئيسية (Dashboard)</h2>
                        <div className="action-cards">
                            <div className="action-card" onClick={handleAddProductClick}>
                                <div className="card-icon add-icon">➕</div>
                                <h3>إضافة منتج جديد</h3>
                                <p>Add New Product</p>
                            </div>

                            <div className="action-card" onClick={handleEditProductClick}>
                                <div className="card-icon edit-icon">✏️</div>
                                <h3>تعديل منتج</h3>
                                <p>Edit Product</p>
                            </div>

                            <div className="action-card" onClick={handleDeleteProductClick}>
                                <div className="card-icon delete-icon">🗑️</div>
                                <h3>حذف منتج</h3>
                                <p>Delete Product</p>
                            </div>

                            <div className="action-card comment-card" onClick={handleDeleteCommentClick}>
                                <div className="card-icon comment-icon">🗨️</div>
                                <h3>حذف تعليق</h3>
                                <p>Delete Comment</p>
                            </div>
                        </div>
                    </div>
                ) : productAction === 'add' ? (
                    <div className="action-section">
                        <div className="action-header">
                            <h2>إضافة منتج جديد (Add New Product)</h2>
                            <button className="back-btn" onClick={handleBackToDashboard}>
                                ← العودة للرئيسية
                            </button>
                        </div>
                        <AddProductForm
                            formData={addFormData}
                            onFormChange={handleAddFormChange}
                            onColorChange={handleAddColorChange}
                            onSubmit={handleAddSubmit}
                            departments={departments}
                        />
                    </div>
                ) : productAction === 'edit' ? (
                    <div className="action-section">
                        <div className="action-header">
                            <h2>تعديل منتج (Edit Product)</h2>
                            <button className="back-btn" onClick={handleBackToDashboard}>
                                ← العودة للرئيسية
                            </button>
                        </div>
                        <EditProductForm
                            editProductId={editProductId}
                            setEditProductId={setEditProductId}
                            editingProduct={editingProduct}
                            setEditingProduct={setEditingProduct}
                            formData={editFormData}
                            onFormChange={handleEditFormChange}
                            onColorChange={handleEditColorChange}
                            onSubmit={handleEditSubmit}
                            onCancel={handleEditCancel}
                            departments={departments}
                            standardcollection={standardcollection}
                        />
                    </div>
                ) : productAction === 'delete' ? (
                    <div className="action-section">
                        <div className="action-header">
                            <h2>حذف منتج (Delete Product)</h2>
                            <button className="back-btn" onClick={handleBackToDashboard}>
                                ← العودة للرئيسية
                            </button>
                        </div>
                        <DeleteProductSection
                            deleteProductId={deleteProductId}
                            setDeleteProductId={setDeleteProductId}
                            handleDeleteSubmit={handleDeleteSubmit}
                            previewProduct={previewProduct}
                            standardcollection={standardcollection}
                        />
                    </div>
                ) : productAction === 'delete-comment' ? (
                    <div className="action-section">
                        <div className="action-header">
                            <h2>🗑️ حذف تعليق (Delete Comment)</h2>
                            <button className="back-btn" onClick={handleBackToDashboard}>
                                ← العودة للرئيسية
                            </button>
                        </div>
                        <DeleteCommentSection
                            deleteCommentId={deleteCommentId}
                            setDeleteCommentId={setDeleteCommentId}
                            handleDeleteCommentSubmit={handleDeleteCommentSubmit}
                            previewComment={previewComment}
                            previewProduct={commentProduct}
                            totalCommentsCount={totalCommentsCount}
                            onFetchComment={handleFetchComment}
                            standardcollection={standardcollection}
                        />
                    </div>
                ) : null}
            </div>

            <footer className="control-panel-footer">
                <p>© {currentYear} نظام إدارة المنتجات والتعليقات. جميع الحقوق محفوظة.</p>
                <p className="stats">
                    📦 عدد المنتجات: {productsdata.length} منتج |
                    🗨️ عدد التعليقات: {totalCommentsCount} تعليق
                </p>
            </footer>
        </div>
    );
}

export default Controlpanel;